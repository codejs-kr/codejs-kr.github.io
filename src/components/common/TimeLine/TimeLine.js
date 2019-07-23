import React from 'react';
import { A } from 'components';
import './TimeLine.scss';

const TimeLineFlag = () => {

};

const TechStackItem = ({ name }) => (
  <li>{ name }</li>
);

const TimeLineItem = ({ data }) => {
  console.log('TimeLineItem', data);

  return (
    <li>
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
          {
            data.techStack.map((name, i) => {
              return <TechStackItem key={i} name={name} />
            })
          }
        </ul>
        {
          data.link && <A href={data.link} icon="default" theme="line">상세 보기</A>
        }
      </div>
    </li>
  )
};

const TimeLine = ({ data }) => {
  console.log('TimeLine', data);

  return (
    <ul className="timeline">
      {
        data.map((oneDepth, i) => {
          if (oneDepth.list) {
            return (
              oneDepth.list.map((twoDepth, i) => {
                return <TimeLineItem key={i} data={twoDepth} />;
              })
            )
          } else {
            return <TimeLineItem key={i} data={oneDepth} />;
          }
        })
      }
    </ul>
  );
};

export default TimeLine;
