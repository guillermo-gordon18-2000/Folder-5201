import { skeleton } from '../../helpers/utils';
import { Fragment } from 'react';
import PropTypes from 'prop-types';

const ListItem = ({ time, degree, institution }) => (
  <li className="mb-5 ml-4">
    <div
      className="absolute mt-1.5 w-2 h-2 rounded-full border bg-base-300 border-base-300"
      style={{ left: '-4.5px' }}
    ></div>
    <div className="my-0.5 text-xs">{time}</div>
    <h3 className="font-semibold">{degree}</h3>
    <div className="mb-4 font-normal">{institution}</div>
  </li>
);

const Education = ({ loading, education }) => {
  const renderSkeleton = () => {
    let array = [];
    for (let index = 0; index < 2; index++) {
      array.push(
        <ListItem
          key={index}
          time={skeleton({
            width: 'w-5/12',
            height: 'h-4',
          })}
          degree={skeleton({
            width: 'w-6/12',
            height: 'h-4',
            className: 'my-1.5',
          })}
          institution={skeleton({ width: 'w-6/12', height: 'h-3' })}
        />
      );
    }

    return array;
  };

  return (
    <>
      {education?.length !== 0 && (
        <div className="shadow-lg card compact bg-base-100">
          <div className="card-body">
            <div className="mx-3">
              <h5 className="card-title">
                {loading ? (
                  skeleton({ width: 'w-32', height: 'h-8' })
                ) : (
                  <span className="opacity-70 text-base-content">
                    Educacion
                  </span>
                )}
              </h5>
            </div>
            <div className="text-opacity-60 text-base-content">
              <ol className="relative my-2 mx-4 border-l border-opacity-30 border-base-300">
                {loading ? (
                  renderSkeleton()
                ) : (
                  <Fragment>
                    {education.map((item, index) => (
                      <ListItem
                        key={index}
                        time={`${item.from} - ${item.to}`}
                        degree={item.degree}
                        institution={item.institution}
                      />
                    ))}
                  </Fragment>
                )}
              </ol>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

Education.propTypes = {
  loading: PropTypes.bool.isRequired,
  education: PropTypes.array.isRequired,
};

ListItem.propTypes = {
  time: PropTypes.node,
  degree: PropTypes.node,
  institution: PropTypes.node,
};

export default Education;
