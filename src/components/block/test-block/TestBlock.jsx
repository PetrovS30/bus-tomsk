import React from 'react';
import './test-block.css';

const TestBlock = () => {
  return (
    // <StyledWrapper>
      <div>
        <div className="feedback">
          <label className="angry">
            <input name="feedback" defaultValue={1} type="radio" />
            <div>
              <svg className="eye left" />
              <svg className="eye right" />
              <svg className="mouth" />
            </div>
          </label>
          <label className="sad">
            <input name="feedback" defaultValue={2} type="radio" />
            <div>
              <svg className="eye left" />
              <svg className="eye right" />
              <svg className="mouth" />
            </div>
          </label>
          <label className="ok">
            <input name="feedback" defaultValue={3} type="radio" />
            <div />
          </label>
          <label className="good">
            <input defaultChecked name="feedback" defaultValue={4} type="radio" />
            <div>
              <svg className="eye left" />
              <svg className="eye right" />
              <svg className="mouth" />
            </div>
          </label>
          <label className="happy">
            <input name="feedback" defaultValue={5} type="radio" />
            <div>
              <svg className="eye left" />
              <svg className="eye right" />
            </div>
          </label>
        </div>
        <svg style={{display: 'none'}} xmlns="http://www.w3.org/2000/svg">
          <symbol id="eye" viewBox="0 0 7 4" xmlns="http://www.w3.org/2000/svg">
            <path d="M1,1 C1.83333333,2.16666667 2.66666667,2.75 3.5,2.75 C4.33333333,2.75 5.16666667,2.16666667 6,1" />
          </symbol>
          <symbol id="mouth" viewBox="0 0 18 7" xmlns="http://www.w3.org/2000/svg">
            <path d="M1,5.5 C3.66666667,2.5 6.33333333,1 9,1 C11.6666667,1 14.3333333,2.5 17,5.5" />
          </symbol>
        </svg>
      </div>
    // </StyledWrapper>
  );
};

export default TestBlock;