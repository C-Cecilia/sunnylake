import { useState } from 'react'
import { IMAGES } from '../../constants'
import '../../styles/Newsletter.css'

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
}

export default function Newsletter() {
  const [email,   setEmail]   = useState('')
  const [error,   setError]   = useState('')
  const [success, setSuccess] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    if (!email.trim()) {
      setError('Please enter your email address.')
      return
    }
    if (!validateEmail(email)) {
      setError('Please enter a valid email address.')
      return
    }

    setSuccess(true)
    setEmail('')
  }

  return (
    <section className="newsletter">
      <img className="newsletter__bg" src={IMAGES.newsletter} alt="" aria-hidden="true" />
      <div className="newsletter__overlay" />

      <div className="newsletter__content">
        <p className="newsletter__tag">Newsletter</p>
        <h2 className="newsletter__title">Stay up to date</h2>
        <p className="newsletter__desc">
          Get regular updates on upcoming events, new trails, seasonal
          activities, and special offers straight to your inbox.
        </p>

        {success ? (
          <div className="newsletter__success">
            <span className="newsletter__success-icon">✓</span>
            <p>Thank you! You're now subscribed to our newsletter.</p>
          </div>
        ) : (
          <form className="newsletter__form" onSubmit={handleSubmit} noValidate>
            <div className="newsletter__field">
              <input
                className={`newsletter__input ${error ? 'newsletter__input--error' : ''}`}
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  if (error) setError('')
                }}
                aria-label="Email address"
              />
              <button className="newsletter__btn" type="submit">
                Sign up
              </button>
            </div>
            {error && <p className="newsletter__error">{error}</p>}
          </form>
        )}
      </div>
    </section>
  )
}
