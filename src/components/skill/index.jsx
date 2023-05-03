import { skeleton } from '../../helpers/utils';
import PropTypes from 'prop-types';

const Skill = ({ loading, skills }) => {
  const renderSkeleton = () => {
    let array = [];
    for (let index = 0; index < 12; index++) {
      array.push(
        <div key={index}>
          {skeleton({ width: 'w-16', height: 'h-4', className: 'm-1' })}
        </div>
      );
    }

    return array;
  };

  return (
    <>
      {skills?.length !== 0 && (
        <div className="shadow-lg card compact bg-base-100">
          <div className="card-body">
            <div className="mx-3">
              <h5 className="card-title">
                {loading ? (
                  skeleton({ width: 'w-32', height: 'h-8' })
                ) : (
                  <span className="opacity-70 text-base-content">
                    Entornos y Lenguajes
                  </span>
                )}
              </h5>
            </div>
            <div className="flow-root p-3">
              <div className="flex flex-wrap justify-center -m-1">
                {loading
                  ? renderSkeleton()
                  : skills.map((skill, index) => (
                      <div
                        key={index}
                        className="inline-flex items-center py-1 px-3 m-1 text-xs font-bold bg-opacity-90 rounded-full leading-sm badge-primary"
                      >
                        {skill}
                      </div>
                    ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

Skill.propTypes = {
  loading: PropTypes.bool.isRequired,
  skills: PropTypes.array.isRequired,
};

export default Skill;
