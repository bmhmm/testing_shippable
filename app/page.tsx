"use client";

import { useState } from "react";

type AccountAction = "Login" | "Sign up";

export default function HomePage() {
  const [activeAction, setActiveAction] = useState<AccountAction | null>(null);

  return (
    <main className="page-shell">
      <header className="site-header">
        <a className="brand" href="#home" aria-label="greenArea home">
          <span className="brand-mark" aria-hidden="true">✳</span>
          greenArea
        </a>
        <span className="header-note">A little better, every day.</span>
      </header>

      <section className="hero" id="home" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-dot" /> YOUR SPACE TO GROW</p>
          <h1 id="hero-title">Welcome to <span>green area</span></h1>
          <p className="hero-description">
            Build gentle routines, celebrate small wins, and find a little more
            balance—one day at a time.
          </p>
          <a className="text-link" href="#how-it-works">
            See how it works <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="garden-card" aria-label="A daily reminder to take things one step at a time">
          <div className="card-topline">
            <span className="card-label">A NOTE FOR TODAY</span>
            <span className="sun-icon" aria-hidden="true">☼</span>
          </div>
          <div className="plant-art" aria-hidden="true">
            <span className="plant-stem" />
            <span className="leaf leaf-one" />
            <span className="leaf leaf-two" />
            <span className="leaf leaf-three" />
            <span className="leaf leaf-four" />
            <span className="plant-pot" />
          </div>
          <p className="note-quote">“You don’t have to bloom all at once.”</p>
          <div className="card-footer"><span>TAKE IT AT YOUR PACE</span><span>✳</span></div>
        </div>
      </section>

      <section className="how-section" id="how-it-works" aria-label="How greenArea works">
        <div className="how-heading">
          <span className="section-kicker">A softer kind of progress</span>
          <span className="section-line" aria-hidden="true" />
        </div>
        <div className="steps">
          <article className="step">
            <span className="step-number">01</span>
            <h2>Start small</h2>
            <p>Choose a simple intention that feels right for you.</p>
          </article>
          <article className="step">
            <span className="step-number">02</span>
            <h2>Find your rhythm</h2>
            <p>Make space for the things that help you feel your best.</p>
          </article>
          <article className="step">
            <span className="step-number">03</span>
            <h2>Notice the good</h2>
            <p>Every small step is worth taking a moment to celebrate.</p>
          </article>
        </div>
      </section>

      <div className="account-actions" aria-label="Account actions">
        <button className="account-button" onClick={() => setActiveAction("Login")}>
          Login
        </button>
        <button className="account-button account-button-primary" onClick={() => setActiveAction("Sign up")}>
          Sign up
        </button>
      </div>

      {activeAction && (
        <div className="modal-backdrop" onMouseDown={(event) => {
          if (event.target === event.currentTarget) setActiveAction(null);
        }}>
          <section className="auth-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
            <button className="modal-close" type="button" onClick={() => setActiveAction(null)} aria-label="Close">
              ×
            </button>
            <span className="modal-mark" aria-hidden="true">✳</span>
            <p className="eyebrow modal-eyebrow">WELCOME TO greenArea</p>
            <h2 id="modal-title">{activeAction === "Login" ? "Welcome back." : "Let’s get growing."}</h2>
            <p className="modal-description">
              {activeAction === "Login" ? "Pick up right where you left off." : "Create your space for small, meaningful steps."}
            </p>
            <form className="auth-form" onSubmit={(event) => event.preventDefault()}>
              <label htmlFor="email">Email address</label>
              <input id="email" type="email" autoComplete="email" placeholder="you@example.com" required />
              <label htmlFor="password">Password</label>
              <input id="password" type="password" autoComplete={activeAction === "Login" ? "current-password" : "new-password"} placeholder="At least 8 characters" minLength={8} required />
              <button className="form-submit" type="submit">{activeAction}</button>
            </form>
            <p className="form-switch">
              {activeAction === "Login" ? "New to greenArea?" : "Already have an account?"}{" "}
              <button type="button" onClick={() => setActiveAction(activeAction === "Login" ? "Sign up" : "Login")}>
                {activeAction === "Login" ? "Sign up" : "Login"}
              </button>
            </p>
          </section>
        </div>
      )}
    </main>
  );
}
