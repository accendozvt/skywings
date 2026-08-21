import { pageMetadata } from '@/lib/seo';
import FeedbackScripts from '@/components/FeedbackScripts';
import './page.css';

export const metadata = pageMetadata('skywings-feedback-form');

export default function Page_skywings_feedback_form() {
  return (
    <>

<div className="fb-root" id="fb-root">


<div id="fb-form-view">

  
  <div className="fb-header">
    <div className="fb-wrap">
      <div className="fb-header__inner">
        <div className="fb-header__badge">
          <div className="fb-header__badge-dot"></div>
          Anonymous Submission
        </div>
        <h1>Your Feedback Matters</h1>
        <p className="fb-header__note">This form is <strong>completely anonymous</strong>, no name, roll number, or contact is collected. Your honest input helps us improve SkyWings Academy for everyone.</p>
        <div className="fb-wrap" style={{ marginTop: '20px' }}>
          <div className="fb-progress-bar"><div className="fb-progress-fill" id="fb-progress" style={{ width: '0%' }}></div></div>
          <div className="fb-progress-text" id="fb-progress-text">Complete all sections to submit</div>
        </div>
      </div>
    </div>
  </div>

  
  <div className="fb-body">
    <div className="fb-wrap">
      <form id="fb-form">

        
        <div className="fb-section">
          <div className="fb-section__head">
            <div className="fb-section__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div>
            <div><span className="fb-section__label">Section A</span><span className="fb-section__title">About Your Enrolment</span></div>
          </div>
          <div className="fb-section__body">

            <div className="fb-q">
              <span className="fb-q-label">A1. How long have you been studying at SkyWings Academy?</span>
              <div className="fb-options" id="qa1">
                <label className="fb-option"><input type="radio" name="a1" value="Less than 3 months" /><span className="fb-option__box"><span className="fb-option__box-inner"></span></span><span className="fb-option__text">Less than 3 months</span></label>
                <label className="fb-option"><input type="radio" name="a1" value="3 to 6 months" /><span className="fb-option__box"><span className="fb-option__box-inner"></span></span><span className="fb-option__text">3 to 6 months</span></label>
                <label className="fb-option"><input type="radio" name="a1" value="6 to 12 months" /><span className="fb-option__box"><span className="fb-option__box-inner"></span></span><span className="fb-option__text">6 to 12 months</span></label>
                <label className="fb-option"><input type="radio" name="a1" value="More than 1 year" /><span className="fb-option__box"><span className="fb-option__box-inner"></span></span><span className="fb-option__text">More than 1 year</span></label>
              </div>
            </div>

            <div className="fb-q">
              <span className="fb-q-label">A2. Which campus are you enrolled at?</span>
              <div className="fb-options" id="qa2">
                <label className="fb-option"><input type="radio" name="a2" value="Kochi" /><span className="fb-option__box"><span className="fb-option__box-inner"></span></span><span className="fb-option__text">Kochi (Ernakulam)</span></label>
                <label className="fb-option"><input type="radio" name="a2" value="Mahe" /><span className="fb-option__box"><span className="fb-option__box-inner"></span></span><span className="fb-option__text">Mahe</span></label>
              </div>
            </div>

            <div className="fb-q">
              <span className="fb-q-label">A3. Which programme are you enrolled in?</span>
              <div className="fb-options" id="qa3">
                <label className="fb-option"><input type="radio" name="a3" value="BBA Aviation" /><span className="fb-option__box"><span className="fb-option__box-inner"></span></span><span className="fb-option__text">BBA Aviation, Airline & Airport Management</span></label>
                <label className="fb-option"><input type="radio" name="a3" value="MBA Aviation" /><span className="fb-option__box"><span className="fb-option__box-inner"></span></span><span className="fb-option__text">MBA Aviation, Airline & Airport Management</span></label>
                <label className="fb-option"><input type="radio" name="a3" value="Diploma Cabin Crew" /><span className="fb-option__box"><span className="fb-option__box-inner"></span></span><span className="fb-option__text">Diploma in Cabin Crew Management</span></label>
                <label className="fb-option"><input type="radio" name="a3" value="Diploma AAM" /><span className="fb-option__box"><span className="fb-option__box-inner"></span></span><span className="fb-option__text">Diploma in Airline & Airport Management</span></label>
                <label className="fb-option"><input type="radio" name="a3" value="BBA Logistics" /><span className="fb-option__box"><span className="fb-option__box-inner"></span></span><span className="fb-option__text">BBA Logistics & Supply Chain Management</span></label>
                <label className="fb-option"><input type="radio" name="a3" value="Diploma Hospitality" /><span className="fb-option__box"><span className="fb-option__box-inner"></span></span><span className="fb-option__text">Diploma in Aviation & Hospitality</span></label>
              </div>
            </div>

          </div>
        </div>

        
        <div className="fb-section">
          <div className="fb-section__head">
            <div className="fb-section__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/></svg></div>
            <div><span className="fb-section__label">Section B</span><span className="fb-section__title">Training Quality</span></div>
          </div>
          <div className="fb-section__body">
            <div className="fb-rating-list">
          <div className="fb-rating-row" id="row-b1">
            <div className="fb-rating-row__label">Quality of classroom teaching</div>
            <div className="fb-rating-row__scale">
              <button type="button" className="fb-rate-btn" data-name="b1" data-val="1">1</button>
              <button type="button" className="fb-rate-btn" data-name="b1" data-val="2">2</button>
              <button type="button" className="fb-rate-btn" data-name="b1" data-val="3">3</button>
              <button type="button" className="fb-rate-btn" data-name="b1" data-val="4">4</button>
              <button type="button" className="fb-rate-btn" data-name="b1" data-val="5">5</button>
            </div>
            <div className="fb-rating-row__scale-hint">
              <span>1 = Very Poor</span>
              <span>5 = Excellent</span>
            </div>
            <input type="hidden" name="b1" id="b1-val" />
          </div>
          <div className="fb-rating-row" id="row-b2">
            <div className="fb-rating-row__label">Trainer's knowledge and industry expertise</div>
            <div className="fb-rating-row__scale">
              <button type="button" className="fb-rate-btn" data-name="b2" data-val="1">1</button>
              <button type="button" className="fb-rate-btn" data-name="b2" data-val="2">2</button>
              <button type="button" className="fb-rate-btn" data-name="b2" data-val="3">3</button>
              <button type="button" className="fb-rate-btn" data-name="b2" data-val="4">4</button>
              <button type="button" className="fb-rate-btn" data-name="b2" data-val="5">5</button>
            </div>
            <div className="fb-rating-row__scale-hint">
              <span>1 = Very Poor</span>
              <span>5 = Excellent</span>
            </div>
            <input type="hidden" name="b2" id="b2-val" />
          </div>
          <div className="fb-rating-row" id="row-b3">
            <div className="fb-rating-row__label">Relevance of content to real aviation jobs</div>
            <div className="fb-rating-row__scale">
              <button type="button" className="fb-rate-btn" data-name="b3" data-val="1">1</button>
              <button type="button" className="fb-rate-btn" data-name="b3" data-val="2">2</button>
              <button type="button" className="fb-rate-btn" data-name="b3" data-val="3">3</button>
              <button type="button" className="fb-rate-btn" data-name="b3" data-val="4">4</button>
              <button type="button" className="fb-rate-btn" data-name="b3" data-val="5">5</button>
            </div>
            <div className="fb-rating-row__scale-hint">
              <span>1 = Very Poor</span>
              <span>5 = Excellent</span>
            </div>
            <input type="hidden" name="b3" id="b3-val" />
          </div>
          <div className="fb-rating-row" id="row-b4">
            <div className="fb-rating-row__label">Practical / hands-on training sessions</div>
            <div className="fb-rating-row__scale">
              <button type="button" className="fb-rate-btn" data-name="b4" data-val="1">1</button>
              <button type="button" className="fb-rate-btn" data-name="b4" data-val="2">2</button>
              <button type="button" className="fb-rate-btn" data-name="b4" data-val="3">3</button>
              <button type="button" className="fb-rate-btn" data-name="b4" data-val="4">4</button>
              <button type="button" className="fb-rate-btn" data-name="b4" data-val="5">5</button>
            </div>
            <div className="fb-rating-row__scale-hint">
              <span>1 = Very Poor</span>
              <span>5 = Excellent</span>
            </div>
            <input type="hidden" name="b4" id="b4-val" />
          </div>
          <div className="fb-rating-row" id="row-b5">
            <div className="fb-rating-row__label">English communication training sessions</div>
            <div className="fb-rating-row__scale">
              <button type="button" className="fb-rate-btn" data-name="b5" data-val="1">1</button>
              <button type="button" className="fb-rate-btn" data-name="b5" data-val="2">2</button>
              <button type="button" className="fb-rate-btn" data-name="b5" data-val="3">3</button>
              <button type="button" className="fb-rate-btn" data-name="b5" data-val="4">4</button>
              <button type="button" className="fb-rate-btn" data-name="b5" data-val="5">5</button>
            </div>
            <div className="fb-rating-row__scale-hint">
              <span>1 = Very Poor</span>
              <span>5 = Excellent</span>
            </div>
            <input type="hidden" name="b5" id="b5-val" />
          </div>
            </div>
            <div className="fb-q" style={{ marginTop: '22px' }}>
              <span className="fb-q-label">What would you change or improve about the training?</span>
              <textarea className="fb-textarea" name="b_open" id="b_open" placeholder="Share your thoughts (optional)…"></textarea>
            </div>
          </div>
        </div>

        
        <div className="fb-section">
          <div className="fb-section__head">
            <div className="fb-section__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></div>
            <div><span className="fb-section__label">Section C</span><span className="fb-section__title">Grooming & Uniform</span></div>
          </div>
          <div className="fb-section__body">
            <div className="fb-rating-list">
          <div className="fb-rating-row" id="row-c1">
            <div className="fb-rating-row__label">Overall quality and design of the uniform</div>
            <div className="fb-rating-row__scale">
              <button type="button" className="fb-rate-btn" data-name="c1" data-val="1">1</button>
              <button type="button" className="fb-rate-btn" data-name="c1" data-val="2">2</button>
              <button type="button" className="fb-rate-btn" data-name="c1" data-val="3">3</button>
              <button type="button" className="fb-rate-btn" data-name="c1" data-val="4">4</button>
              <button type="button" className="fb-rate-btn" data-name="c1" data-val="5">5</button>
            </div>
            <div className="fb-rating-row__scale-hint">
              <span>1 = Very Poor</span>
              <span>5 = Excellent</span>
            </div>
            <input type="hidden" name="c1" id="c1-val" />
          </div>
          <div className="fb-rating-row" id="row-c2">
            <div className="fb-rating-row__label">Comfort and fit of the uniform</div>
            <div className="fb-rating-row__scale">
              <button type="button" className="fb-rate-btn" data-name="c2" data-val="1">1</button>
              <button type="button" className="fb-rate-btn" data-name="c2" data-val="2">2</button>
              <button type="button" className="fb-rate-btn" data-name="c2" data-val="3">3</button>
              <button type="button" className="fb-rate-btn" data-name="c2" data-val="4">4</button>
              <button type="button" className="fb-rate-btn" data-name="c2" data-val="5">5</button>
            </div>
            <div className="fb-rating-row__scale-hint">
              <span>1 = Very Poor</span>
              <span>5 = Excellent</span>
            </div>
            <input type="hidden" name="c2" id="c2-val" />
          </div>
          <div className="fb-rating-row" id="row-c3">
            <div className="fb-rating-row__label">How professional the uniform looks</div>
            <div className="fb-rating-row__scale">
              <button type="button" className="fb-rate-btn" data-name="c3" data-val="1">1</button>
              <button type="button" className="fb-rate-btn" data-name="c3" data-val="2">2</button>
              <button type="button" className="fb-rate-btn" data-name="c3" data-val="3">3</button>
              <button type="button" className="fb-rate-btn" data-name="c3" data-val="4">4</button>
              <button type="button" className="fb-rate-btn" data-name="c3" data-val="5">5</button>
            </div>
            <div className="fb-rating-row__scale-hint">
              <span>1 = Very Poor</span>
              <span>5 = Excellent</span>
            </div>
            <input type="hidden" name="c3" id="c3-val" />
          </div>
          <div className="fb-rating-row" id="row-c4">
            <div className="fb-rating-row__label">Quality of grooming training sessions</div>
            <div className="fb-rating-row__scale">
              <button type="button" className="fb-rate-btn" data-name="c4" data-val="1">1</button>
              <button type="button" className="fb-rate-btn" data-name="c4" data-val="2">2</button>
              <button type="button" className="fb-rate-btn" data-name="c4" data-val="3">3</button>
              <button type="button" className="fb-rate-btn" data-name="c4" data-val="4">4</button>
              <button type="button" className="fb-rate-btn" data-name="c4" data-val="5">5</button>
            </div>
            <div className="fb-rating-row__scale-hint">
              <span>1 = Very Poor</span>
              <span>5 = Excellent</span>
            </div>
            <input type="hidden" name="c4" id="c4-val" />
          </div>
          <div className="fb-rating-row" id="row-c5">
            <div className="fb-rating-row__label">Personal presentation confidence</div>
            <div className="fb-rating-row__scale">
              <button type="button" className="fb-rate-btn" data-name="c5" data-val="1">1</button>
              <button type="button" className="fb-rate-btn" data-name="c5" data-val="2">2</button>
              <button type="button" className="fb-rate-btn" data-name="c5" data-val="3">3</button>
              <button type="button" className="fb-rate-btn" data-name="c5" data-val="4">4</button>
              <button type="button" className="fb-rate-btn" data-name="c5" data-val="5">5</button>
            </div>
            <div className="fb-rating-row__scale-hint">
              <span>1 = Very Poor</span>
              <span>5 = Excellent</span>
            </div>
            <input type="hidden" name="c5" id="c5-val" />
          </div>
            </div>
            <div className="fb-q" style={{ marginTop: '22px' }}>
              <span className="fb-q-label">Any feedback on the uniform (colour, design, fit, material)?</span>
              <textarea className="fb-textarea" name="c_open" id="c_open" placeholder="Share your thoughts (optional)…"></textarea>
            </div>
          </div>
        </div>

        
        <div className="fb-section">
          <div className="fb-section__head">
            <div className="fb-section__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg></div>
            <div><span className="fb-section__label">Section D</span><span className="fb-section__title">Campus & Facilities</span></div>
          </div>
          <div className="fb-section__body">
            <div className="fb-rating-list">
          <div className="fb-rating-row" id="row-d1">
            <div className="fb-rating-row__label">Cleanliness and maintenance of campus</div>
            <div className="fb-rating-row__scale">
              <button type="button" className="fb-rate-btn" data-name="d1" data-val="1">1</button>
              <button type="button" className="fb-rate-btn" data-name="d1" data-val="2">2</button>
              <button type="button" className="fb-rate-btn" data-name="d1" data-val="3">3</button>
              <button type="button" className="fb-rate-btn" data-name="d1" data-val="4">4</button>
              <button type="button" className="fb-rate-btn" data-name="d1" data-val="5">5</button>
            </div>
            <div className="fb-rating-row__scale-hint">
              <span>1 = Very Poor</span>
              <span>5 = Excellent</span>
            </div>
            <input type="hidden" name="d1" id="d1-val" />
          </div>
          <div className="fb-rating-row" id="row-d2">
            <div className="fb-rating-row__label">Comfort of classrooms (AC, seating, lighting)</div>
            <div className="fb-rating-row__scale">
              <button type="button" className="fb-rate-btn" data-name="d2" data-val="1">1</button>
              <button type="button" className="fb-rate-btn" data-name="d2" data-val="2">2</button>
              <button type="button" className="fb-rate-btn" data-name="d2" data-val="3">3</button>
              <button type="button" className="fb-rate-btn" data-name="d2" data-val="4">4</button>
              <button type="button" className="fb-rate-btn" data-name="d2" data-val="5">5</button>
            </div>
            <div className="fb-rating-row__scale-hint">
              <span>1 = Very Poor</span>
              <span>5 = Excellent</span>
            </div>
            <input type="hidden" name="d2" id="d2-val" />
          </div>
          <div className="fb-rating-row" id="row-d3">
            <div className="fb-rating-row__label">Availability of study materials</div>
            <div className="fb-rating-row__scale">
              <button type="button" className="fb-rate-btn" data-name="d3" data-val="1">1</button>
              <button type="button" className="fb-rate-btn" data-name="d3" data-val="2">2</button>
              <button type="button" className="fb-rate-btn" data-name="d3" data-val="3">3</button>
              <button type="button" className="fb-rate-btn" data-name="d3" data-val="4">4</button>
              <button type="button" className="fb-rate-btn" data-name="d3" data-val="5">5</button>
            </div>
            <div className="fb-rating-row__scale-hint">
              <span>1 = Very Poor</span>
              <span>5 = Excellent</span>
            </div>
            <input type="hidden" name="d3" id="d3-val" />
          </div>
          <div className="fb-rating-row" id="row-d4">
            <div className="fb-rating-row__label">Campus safety and security</div>
            <div className="fb-rating-row__scale">
              <button type="button" className="fb-rate-btn" data-name="d4" data-val="1">1</button>
              <button type="button" className="fb-rate-btn" data-name="d4" data-val="2">2</button>
              <button type="button" className="fb-rate-btn" data-name="d4" data-val="3">3</button>
              <button type="button" className="fb-rate-btn" data-name="d4" data-val="4">4</button>
              <button type="button" className="fb-rate-btn" data-name="d4" data-val="5">5</button>
            </div>
            <div className="fb-rating-row__scale-hint">
              <span>1 = Very Poor</span>
              <span>5 = Excellent</span>
            </div>
            <input type="hidden" name="d4" id="d4-val" />
          </div>
            </div>
          </div>
        </div>

        
        <div className="fb-section">
          <div className="fb-section__head">
            <div className="fb-section__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17.8 19.2L16 11l3.5-3.5C21 6 21 4 19 2c-2-2-4-2-5.5-.5L10 5 1.8 6.2l6 6-1 3.5 3.5-1z"/></svg></div>
            <div><span className="fb-section__label">Section E</span><span className="fb-section__title">Placement & Career Support</span></div>
          </div>
          <div className="fb-section__body">

            <div className="fb-q">
              <span className="fb-q-label">E1. How satisfied are you with placement support so far?</span>
              <div className="fb-options" id="qe1">
                <label className="fb-option"><input type="radio" name="e1" value="Very Satisfied" /><span className="fb-option__box"><span className="fb-option__box-inner"></span></span><span className="fb-option__text">Very Satisfied</span></label>
                <label className="fb-option"><input type="radio" name="e1" value="Satisfied" /><span className="fb-option__box"><span className="fb-option__box-inner"></span></span><span className="fb-option__text">Satisfied</span></label>
                <label className="fb-option"><input type="radio" name="e1" value="Neutral" /><span className="fb-option__box"><span className="fb-option__box-inner"></span></span><span className="fb-option__text">Neutral</span></label>
                <label className="fb-option"><input type="radio" name="e1" value="Dissatisfied" /><span className="fb-option__box"><span className="fb-option__box-inner"></span></span><span className="fb-option__text">Dissatisfied</span></label>
                <label className="fb-option"><input type="radio" name="e1" value="Very Dissatisfied" /><span className="fb-option__box"><span className="fb-option__box-inner"></span></span><span className="fb-option__text">Very Dissatisfied</span></label>
              </div>
            </div>

            <div className="fb-q">
              <span className="fb-q-label">E2. How confident do you feel about clearing an airline interview? <span>(1 = Not at all · 5 = Very confident)</span></span>
              <div className="fb-stars" id="stars-e2">
                <div className="fb-star" data-val="1">1</div>
                <div className="fb-star" data-val="2">2</div>
                <div className="fb-star" data-val="3">3</div>
                <div className="fb-star" data-val="4">4</div>
                <div className="fb-star" data-val="5">5</div>
                <span className="fb-star-label" id="e2-label">Tap to rate</span>
              </div>
              <input type="hidden" name="e2" id="e2-val" />
            </div>

          </div>
        </div>

        
        <div className="fb-section">
          <div className="fb-section__head">
            <div className="fb-section__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg></div>
            <div><span className="fb-section__label">Section F</span><span className="fb-section__title">Overall Experience</span></div>
          </div>
          <div className="fb-section__body">

            <div className="fb-q">
              <span className="fb-q-label">F1. Overall, how would you rate SkyWings Academy? <span>(1 = Very Poor · 5 = Excellent)</span></span>
              <div className="fb-stars" id="stars-f1">
                <div className="fb-star" data-val="1">1</div>
                <div className="fb-star" data-val="2">2</div>
                <div className="fb-star" data-val="3">3</div>
                <div className="fb-star" data-val="4">4</div>
                <div className="fb-star" data-val="5">5</div>
                <span className="fb-star-label" id="f1-label">Tap to rate</span>
              </div>
              <input type="hidden" name="f1" id="f1-val" />
            </div>

            <div className="fb-q" style={{ marginTop: '20px' }}>
              <span className="fb-q-label">F2. Would you recommend SkyWings Academy to a friend?</span>
              <div className="fb-options" id="qf2">
                <label className="fb-option"><input type="radio" name="f2" value="Definitely yes" /><span className="fb-option__box"><span className="fb-option__box-inner"></span></span><span className="fb-option__text">Definitely yes</span></label>
                <label className="fb-option"><input type="radio" name="f2" value="Probably yes" /><span className="fb-option__box"><span className="fb-option__box-inner"></span></span><span className="fb-option__text">Probably yes</span></label>
                <label className="fb-option"><input type="radio" name="f2" value="Not sure" /><span className="fb-option__box"><span className="fb-option__box-inner"></span></span><span className="fb-option__text">Not sure</span></label>
                <label className="fb-option"><input type="radio" name="f2" value="Probably not" /><span className="fb-option__box"><span className="fb-option__box-inner"></span></span><span className="fb-option__text">Probably not</span></label>
                <label className="fb-option"><input type="radio" name="f2" value="Definitely not" /><span className="fb-option__box"><span className="fb-option__box-inner"></span></span><span className="fb-option__text">Definitely not</span></label>
              </div>
            </div>

            <div className="fb-q" style={{ marginTop: '20px' }}>
              <span className="fb-q-label">F3. What is the <strong>best thing</strong> about SkyWings Academy?</span>
              <textarea className="fb-textarea" name="f3" id="f3" placeholder="The trainers, grooming sessions, campus environment…"></textarea>
            </div>

            <div className="fb-q">
              <span className="fb-q-label">F4. What is the <strong>one thing</strong> you wish was different?</span>
              <textarea className="fb-textarea" name="f4" id="f4" placeholder="Any honest suggestion is welcome…"></textarea>
            </div>

            <div className="fb-q">
              <span className="fb-q-label">F5. Any other comments or suggestions for management?</span>
              <textarea className="fb-textarea" name="f5" id="f5" placeholder="Anything else on your mind…" style={{ minHeight: '100px' }}></textarea>
            </div>

          </div>
        </div>

        
        <div className="fb-submit-wrap">
          <button type="button" className="fb-submit" id="fb-submit-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
            Submit Feedback
          </button>
          <p className="fb-submit-note">🔒 100% anonymous · No personal data collected</p>
        </div>

      </form>

      
      <div className="fb-success" id="fb-success">
        <div className="fb-success__icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
        </div>
        <h2>Thank you for your feedback!</h2>
        <p>Your response has been recorded anonymously. SkyWings Academy management will review all feedback and take meaningful action.</p>
      </div>

    </div>
  </div>
</div>


<div style={{ textAlign: 'center', padding: '20px 0 40px', background: 'var(--offwhite)' }}>
  <button style={{ fontFamily: 'var(--font-sora),sans-serif', fontSize: '11px', fontWeight: '500', letterSpacing: '1.5px', textTransform: 'uppercase', padding: '10px 22px', borderRadius: '100px', border: '1px solid var(--navy-line)', background: 'transparent', color: 'var(--text-lt)', cursor: 'pointer', transition: 'var(--t)' }}>
    📊 View Analytics Dashboard
  </button>
</div>


<div className="fb-dash-root" id="fb-dash-root">

  
  <div className="fb-lock" id="fb-lock">
    <div className="fb-lock__card">
      <div className="fb-lock__icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
      </div>
      <div className="fb-lock__title">Analytics Dashboard</div>
      <div className="fb-lock__sub">Enter password to access feedback analytics</div>
      <input type="password" className="fb-lock__input" id="fb-pw" placeholder="Enter password" />
      <button className="fb-lock__btn">Unlock Dashboard</button>
      <div className="fb-lock__error" id="fb-pw-err">Incorrect password. Please try again.</div>
    </div>
  </div>

  
  <div id="fb-dash-content" style={{ display: 'none' }}>

    <div className="fb-dash-header">
      <div className="fb-wrap--wide">
        <div className="fb-dash-header__inner">
          <div>
            <h2>Feedback Analytics Dashboard</h2>
            <div className="fb-dash-header__meta" id="dash-meta">Loading responses…</div>
          </div>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <button className="fb-dash-btn">⟳ Refresh Data</button>
            <button className="fb-dash-btn">🔒 Lock</button>
          </div>
        </div>
      </div>
    </div>

    <div style={{ background: 'var(--offwhite)', padding: '32px 0 56px' }}>
      <div className="fb-wrap--wide">

        
        <div className="fb-kpi-grid">
          <div className="fb-kpi">
            <div className="fb-kpi__num" id="kpi-total">, </div>
            <div className="fb-kpi__label">Total Responses</div>
            <div className="fb-kpi__change" id="kpi-recent">Loading…</div>
          </div>
          <div className="fb-kpi">
            <div className="fb-kpi__num" id="kpi-overall">, </div>
            <div className="fb-kpi__label">Overall Rating (avg)</div>
            <div className="fb-kpi__change" id="kpi-overall-trend">out of 5</div>
          </div>
          <div className="fb-kpi">
            <div className="fb-kpi__num" id="kpi-nps">, </div>
            <div className="fb-kpi__label">Would Recommend</div>
            <div className="fb-kpi__change">Definitely + Probably Yes</div>
          </div>
          <div className="fb-kpi">
            <div className="fb-kpi__num" id="kpi-confidence">, </div>
            <div className="fb-kpi__label">Interview Confidence (avg)</div>
            <div className="fb-kpi__change">out of 5</div>
          </div>
        </div>

        
        <div className="fb-chart-grid" style={{ marginBottom: '16px' }}>
          <div className="fb-chart-card">
            <div className="fb-chart-card__title">Overall Rating Distribution</div>
            <div className="fb-chart-card__sub">How students rate SkyWings overall (1–5)</div>
            <canvas id="chart-overall"></canvas>
          </div>
          <div className="fb-chart-card">
            <div className="fb-chart-card__title">Responses by Campus</div>
            <div className="fb-chart-card__sub">Kochi vs Mahe breakdown</div>
            <canvas id="chart-campus"></canvas>
          </div>
        </div>

        
        <div className="fb-chart-grid" style={{ marginBottom: '16px' }}>
          <div className="fb-chart-card">
            <div className="fb-chart-card__title">Average Score by Section</div>
            <div className="fb-chart-card__sub">Avg rating across Training, Grooming, Campus</div>
            <canvas id="chart-sections"></canvas>
          </div>
          <div className="fb-chart-card">
            <div className="fb-chart-card__title">Responses by Programme</div>
            <div className="fb-chart-card__sub">Which courses are submitting the most feedback</div>
            <canvas id="chart-programme"></canvas>
          </div>
        </div>

        
        <div className="fb-chart-grid" style={{ marginBottom: '16px' }}>
          <div className="fb-chart-card">
            <div className="fb-chart-card__title">Would Recommend SkyWings?</div>
            <div className="fb-chart-card__sub">NPS-style recommendation breakdown</div>
            <canvas id="chart-recommend"></canvas>
          </div>
          <div className="fb-chart-card">
            <div className="fb-chart-card__title">Placement Satisfaction</div>
            <div className="fb-chart-card__sub">How satisfied are students with placement support</div>
            <canvas id="chart-placement"></canvas>
          </div>
        </div>

        
        <div className="fb-chart-card" style={{ marginBottom: '16px' }}>
          <div className="fb-chart-card__title">Section Score Breakdown</div>
          <div className="fb-chart-card__sub">Average score per question across all responses</div>
          <table className="fb-score-table" id="score-table">
            <thead><tr><th style={{ width: '50%' }}>Question</th><th>Avg Score</th><th>Rating</th><th style={{ width: '25%' }}>Distribution</th></tr></thead>
            <tbody id="score-table-body"><tr><td colSpan="4" style={{ color: 'var(--text-lt)', fontStyle: 'italic' }}>Loading…</td></tr></tbody>
          </table>
        </div>

        
        <div className="fb-chart-grid">
          <div className="fb-chart-card">
            <div className="fb-chart-card__title">What students love most</div>
            <div className="fb-chart-card__sub">Open-ended responses (F3)</div>
            <div className="fb-responses" id="resp-best"><div className="fb-loading">Loading…</div></div>
          </div>
          <div className="fb-chart-card">
            <div className="fb-chart-card__title">What students want changed</div>
            <div className="fb-chart-card__sub">Open-ended responses (F4)</div>
            <div className="fb-responses" id="resp-change"><div className="fb-loading">Loading…</div></div>
          </div>
        </div>

      </div>
    </div>
  </div>
</div>

</div>
      <FeedbackScripts />
    </>
  );
}
