import React from 'react';
import { A, RowList } from 'components';
import { Link } from 'react-router-dom';
import './TimeLine.scss';

const TimeLine = ({ data, hidden = [] }) => {
  // console.log('TimeLine', data);

  return (
    <ul className="timeline">
      {data.map((oneDepth, i) => {
        // 노출 제외 항목
        if (oneDepth.list) {
          // console.log('확인 oneDepth', oneDepth);
          return oneDepth.list.map((twoDepth, j) => {
            // 프로젝트 숨김 항목 제외
            if (!checkInclude(hidden, twoDepth.name)) {
              return <TimeLineItem key={j} flag={j === 0 ? oneDepth : null} data={twoDepth} />;
            }
          });
        } else {
          return <TimeLineItem key={i} data={oneDepth} />;
        }
      })}
    </ul>
  );
};

/**
 * 배열에 항목이 포함되어 있는지 확인한다.
 * @param {data} array
 * @param {string} name
 */
const checkInclude = (data, name) => {
  if (data.length && data.includes(name)) {
    return true;
  } else {
    return false;
  }
};

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
        <RowList data={data.techStack} />
        {data.link && (
          <Link to={data.link}>
            <A size="small" icon="default" theme="line">
              상세 보기
            </A>
          </Link>
        )}
      </div>
    </li>
  );
};

const TimeLineFlag = ({ name, team, date }) => {
  return (
    <div className="flag">
      <p>{name}</p>
      <p>{team}</p>
      <span>{date}</span>
    </div>
  );
};

export default TimeLine;
