import React from 'react';
import { A } from 'components';
import './TimeLine.scss';

const TimeLineFlag = ({ name, team, date }) => {
  return (
    <div className="flag">
      <p>{name}</p>
      <p>{team}</p>
      <span>{date}</span>
    </div>
  );
};

const TechStackItem = ({ name }) => <li>{name}</li>;

const TimeLineItem = ({ flag, data }) => {
  return (
    <li>
      {flag && <TimeLineFlag name={flag.name} team={flag.team} date={flag.date} />}
      <div>
        <h3>{data.name}</h3>
        <span className="info">
          <span className="dot-right">{data.role}</span>
          <span className="date">{data.date}</span>
        </span>
      </div>
      <div>
        <p className="description">{data.description}</p>
        <ul className="row-list">
          {data.techStack.map((name, i) => {
            return <TechStackItem key={i} name={name} />;
          })}
        </ul>
        {data.link && (
          <A href={data.link} size="small" icon="default" theme="line">
            상세 보기
          </A>
        )}
      </div>
    </li>
  );
};

const TimeLine = ({ data }) => {
  // console.log('TimeLine', data);
  return (
    <ul className="timeline">
      {data.map((oneDepth, i) => {
        if (oneDepth.list) {
          // console.log('확인 oneDepth', oneDepth);
          return oneDepth.list.map((twoDepth, j) => {
            return <TimeLineItem key={j} flag={j === 0 ? oneDepth : null} data={twoDepth} />;
          });
        } else {
          return <TimeLineItem key={i} data={oneDepth} />;
        }
      })}
    </ul>
  );
};

export default TimeLine;
