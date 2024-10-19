import React, { useEffect } from 'react';
import '../styles/HappyNewYear.module.css';
import { controlerDateTet } from '../services/controller/script.js';
import Script from 'next/script';

const DateTet: React.FC = () => {
  useEffect(() => {
    controlerDateTet();
  }, []);
  return (
    <main className="main html body">
      <div className="container">
        <div className="loading-init">
          <div className="loading-init__header">Đang Tải</div>
          <div className="loading-init__status">
            Vui Lòng Đợi Trong Giây Lát
          </div>
        </div>
        <div className="stage-container remove">
          <div className="canvas-container">
            <canvas id="trails-canvas"></canvas>
            <canvas id="main-canvas"></canvas>
          </div>
          <div className="controls">
            <div className="btn pause-btn">
              <svg fill="white" width="24" height="24">
                <use href="#icon-pause" xlinkHref="#icon-pause"></use>
              </svg>
            </div>
            <div className="btn sound-btn">
              <svg fill="white" width="24" height="24">
                <use href="#icon-sound-off" xlinkHref="#icon-sound-off"></use>
              </svg>
            </div>
            <div className="btn settings-btn">
              <svg fill="white" width="24" height="24">
                <use href="#icon-settings" xlinkHref="#icon-settings"></use>
              </svg>
            </div>
          </div>
          <div className="menu hide">
            <div className="menu__inner-wrap">
              <div className="btn btn--bright close-menu-btn">
                <svg fill="white" width="24" height="24">
                  <use href="#icon-close" xlinkHref="#icon-close"></use>
                </svg>
              </div>
              <div className="menu__header">Settings</div>
              <div className="menu__subheader">
                For more info, click any label.
              </div>
              <form>
                <div className="form-option form-option--select">
                  <label className="shell-type-label">Shell Type</label>
                  <select className="shell-type"></select>
                </div>
                {/* More form options go here */}
              </form>
              <div className="credits">Passionately built Sayn Achhava.</div>
            </div>
          </div>
        </div>

        <div className="help-modal">
          <div className="help-modal__overlay"></div>
          <div className="help-modal__dialog"></div>
          <div className="help-modal__dialog">
            <div className="help-modal__header"></div>
            <div className="help-modal__body"></div>
            <button type="button" className="help-modal__close-btn">
              Close
            </button>
          </div>
        </div>
        <div id="countdown" className="countdown-container">
          <span id="hours">00</span>
          <p>:</p>
          <span id="minutes">00</span>
          <p>:</p>
          <span id="seconds">00</span>
        </div>
        <div id="chucMung" className="chuc-mung hidden">
          Chúc mừng năm mới 2024
          <br />
          <br />
          <button className="btn-loiChuc">Nhận lời chúc</button>
          <button className="btn-liXi">Nhận lì xì</button>
        </div>
      </div>
      <Script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/329180/fscreen%401.0.1.js" />
      <Script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/329180/MyMath.js" />
    </main>
  );
};

export default DateTet;
