import { useState, useRef, type FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import { contactInfo } from '../../data';
import styles from './Contact.module.scss';

const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  as string;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  as string;

type FormState = 'idle' | 'sending' | 'success' | 'error';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

function validateForm(data: FormData, t: (key: string) => string): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim())              errors.name    = t('validation.nameRequired');
  if (!data.email.trim())             errors.email   = t('validation.emailRequired');
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
                                      errors.email   = t('validation.emailInvalid');
  if (!data.subject.trim())           errors.subject = t('validation.subjectRequired');
  if (!data.message.trim())           errors.message = t('validation.messageRequired');
  else if (data.message.trim().length < 20)
                                      errors.message = t('validation.messageTooShort');
  return errors;
}

export function Contact() {
  const { t } = useTranslation();
  const subjectOptions = t('contact.subjectOptions', { returnObjects: true }) as string[];
  const [formData, setFormData] = useState<FormData>({
    name: '', email: '', subject: '', message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [formState, setFormState] = useState<FormState>('idle');
  const statusRef = useRef<HTMLDivElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const newErrors = validateForm(formData, t);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      const firstError = Object.keys(newErrors)[0];
      document.getElementById(firstError)?.focus();
      return;
    }

    setFormState('sending');
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:  formData.name,
          from_email: formData.email,
          reply_to:   formData.email,
          subject:    formData.subject,
          message:    formData.message,
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setFormState('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => statusRef.current?.focus(), 100);
    } catch {
      setFormState('error');
    }
  };

  return (
    <section id="contact" className={styles.contact} aria-labelledby="contact-title">
      <div className={styles.inner}>
        {/* En-tête */}
        <div className={styles.header}>
          <span className={styles.eyebrow} aria-hidden="true">{t('contact.eyebrow')}</span>
          <h2 id="contact-title" className={styles.title}>
            {t('contact.title')}
            <span className={styles.titleAccent}> {t('contact.titleAccent')}</span>
          </h2>
          <p className={styles.subtitle}>
            {t('contact.subtitle')} <strong>{t('contact.subtitleTime')}</strong>.
          </p>
        </div>

        <div className={styles.grid}>
          {/* Informations de contact */}
          <aside className={styles.info} aria-label={t('contact.infoTitle')}>
            <h3 className={styles.infoTitle}>{t('contact.infoTitle')}</h3>

            <ul className={styles.infoList} role="list">
              <li className={styles.infoItem}>
                <div className={styles.infoIcon} aria-hidden="true">✉️</div>
                <div className={styles.infoContent}>
                  <span className={styles.infoLabel}>Email</span>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className={styles.infoLink}
                    aria-label={`Email: ${contactInfo.email}`}
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </li>

              <li className={styles.infoItem}>
                <div className={styles.infoIcon} aria-hidden="true">📞</div>
                <div className={styles.infoContent}>
                  <span className={styles.infoLabel}>{t('contact.labelPhone')}</span>
                  <a
                    href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                    className={styles.infoLink}
                  >
                    {contactInfo.phone}
                  </a>
                </div>
              </li>

              <li className={styles.infoItem}>
                <div className={styles.infoIcon} aria-hidden="true">💼</div>
                <div className={styles.infoContent}>
                  <span className={styles.infoLabel}>LinkedIn</span>
                  <a
                    href={contactInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.infoLink}
                  >
                    linkedin.com/in/demba-mbow
                  </a>
                </div>
              </li>

              <li className={styles.infoItem}>
                <div className={styles.infoIcon} aria-hidden="true">📍</div>
                <div className={styles.infoContent}>
                  <span className={styles.infoLabel}>{t('contact.labelLocation')}</span>
                  <span className={styles.infoValue}>{contactInfo.location}</span>
                </div>
              </li>
            </ul>

            {/* Carte décorative */}
            <div className={styles.card} aria-hidden="true">
              <div className={styles.cardGlow} />
              <div className={styles.cardContent}>
                <span className={styles.cardEmoji}>🚀</span>
                <strong>Perform Digital</strong>
                <span>Agence digitale</span>
              </div>
            </div>
          </aside>

          {/* Formulaire */}
          <div className={styles.formWrapper}>
            {/* Statut (lecteurs d'écran) */}
            <div
              ref={statusRef}
              role="status"
              aria-live="polite"
              aria-atomic="true"
              tabIndex={-1}
              className={styles.srStatus}
            >
              {formState === 'success' && t('contact.successText')}
              {formState === 'error'   && t('contact.errorText')}
            </div>

            {formState === 'success' ? (
              <div className={styles.successBox} role="alert">
                <span className={styles.successIcon} aria-hidden="true">✅</span>
                <h3>{t('contact.successTitle')}</h3>
                <p>{t('contact.successText')}</p>
                <button
                  className={styles.resetBtn}
                  onClick={() => setFormState('idle')}
                >
                  {t('contact.successBtn')}
                </button>
              </div>
            ) : (
              <form
                className={styles.form}
                onSubmit={handleSubmit}
                noValidate
                aria-label={t('contact.eyebrow')}
              >
                {/* Nom */}
                <div className={styles.field}>
                  <label htmlFor="name" className={styles.label}>
                    {t('contact.fieldName')} <span aria-hidden="true" className={styles.required}>*</span>
                    <span className={styles.srOnly}>(requis)</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                    aria-required="true"
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    aria-invalid={!!errors.name}
                    placeholder={t('contact.placeholderName')}
                  />
                  {errors.name && (
                    <span id="name-error" className={styles.error} role="alert">
                      <span aria-hidden="true">⚠️</span> {errors.name}
                    </span>
                  )}
                </div>

                {/* Email */}
                <div className={styles.field}>
                  <label htmlFor="email" className={styles.label}>
                    {t('contact.fieldEmail')} <span aria-hidden="true" className={styles.required}>*</span>
                    <span className={styles.srOnly}>(requis)</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                    aria-required="true"
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    aria-invalid={!!errors.email}
                    placeholder="votre@email.com"
                  />
                  {errors.email && (
                    <span id="email-error" className={styles.error} role="alert">
                      <span aria-hidden="true">⚠️</span> {errors.email}
                    </span>
                  )}
                </div>

                {/* Sujet */}
                <div className={styles.field}>
                  <label htmlFor="subject" className={styles.label}>
                    {t('contact.fieldSubject')} <span aria-hidden="true" className={styles.required}>*</span>
                    <span className={styles.srOnly}>(requis)</span>
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`${styles.input} ${styles.select} ${errors.subject ? styles.inputError : ''}`}
                    aria-required="true"
                    aria-describedby={errors.subject ? 'subject-error' : undefined}
                    aria-invalid={!!errors.subject}
                  >
                    <option value="">{t('contact.placeholderSubject')}</option>
                    {subjectOptions.map((option, i) => (
                      <option key={i} value={option}>{option}</option>
                    ))}
                  </select>
                  {errors.subject && (
                    <span id="subject-error" className={styles.error} role="alert">
                      <span aria-hidden="true">⚠️</span> {errors.subject}
                    </span>
                  )}
                </div>

                {/* Message */}
                <div className={styles.field}>
                  <label htmlFor="message" className={styles.label}>
                    {t('contact.fieldMessage')} <span aria-hidden="true" className={styles.required}>*</span>
                    <span className={styles.srOnly}>(requis, minimum 20 caractères)</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className={`${styles.input} ${styles.textarea} ${errors.message ? styles.inputError : ''}`}
                    aria-required="true"
                    aria-describedby={`message-count${errors.message ? ' message-error' : ''}`}
                    aria-invalid={!!errors.message}
                    placeholder={t('contact.placeholderMessage')}
                  />
                  <span id="message-count" className={styles.charCount} aria-live="polite">
                    {formData.message.length} {formData.message.length !== 1 ? t('contact.charsPlural') : t('contact.chars')}
                  </span>
                  {errors.message && (
                    <span id="message-error" className={styles.error} role="alert">
                      <span aria-hidden="true">⚠️</span> {errors.message}
                    </span>
                  )}
                </div>

                {/* Mention champs obligatoires */}
                <p className={styles.requiredNote}>
                  <span aria-hidden="true" className={styles.required}>*</span>{' '}
                  {t('contact.required')}
                </p>

                {/* Submit */}
                <button
                  type="submit"
                  className={styles.submit}
                  disabled={formState === 'sending'}
                  aria-busy={formState === 'sending'}
                >
                  {formState === 'sending' ? (
                    <>
                      <span className={styles.spinner} aria-hidden="true" />
                      {t('contact.sending')}
                    </>
                  ) : (
                    <>
                      <span aria-hidden="true">✉️</span>
                      {t('contact.send')}
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
