import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { AiOutlineFork, AiOutlineStar } from 'react-icons/ai';
import { MdInsertLink } from 'react-icons/md';
import { ga, languageColor, skeleton } from '../../helpers/utils';

const Project = ({ repo, loading, github, googleAnalytics }) => {
  if (!loading && Array.isArray(repo) && repo.length === 0) {
    return <></>;
  }

  const renderSkeleton = () => {
    let array = [];
    for (let index = 0; index < github.limit; index++) {
      array.push(
        <div className="shadow-lg card compact bg-base-100" key={index}>
          <div className="flex flex-col justify-between p-8 w-full h-full">
            <div>
              <div className="flex items-center">
                <span>
                  <h5 className="text-lg card-title">
                    {skeleton({
                      width: 'w-32',
                      height: 'h-8',
                      className: 'mb-1',
                    })}
                  </h5>
                </span>
              </div>
              <div className="mt-1 mb-5">
                {skeleton({
                  width: 'w-full',
                  height: 'h-4',
                  className: 'mb-2',
                })}
                {skeleton({ width: 'w-full', height: 'h-4' })}
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex flex-grow">
                <span className="flex items-center mr-3">
                  {skeleton({ width: 'w-12', height: 'h-4' })}
                </span>
                <span className="flex items-center">
                  {skeleton({ width: 'w-12', height: 'h-4' })}
                </span>
              </div>
              <div>
                <span className="flex items-center">
                  {skeleton({ width: 'w-12', height: 'h-4' })}
                </span>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return array;
  };

  const renderProjects = () => {
    return repo.map((item, index) => (
      <a
        className="shadow-lg cursor-pointer card compact bg-base-100"
        href={item.html_url}
        key={index}
        onClick={(e) => {
          e.preventDefault();

          try {
            if (googleAnalytics?.id) {
              ga.event({
                action: 'Click project',
                params: {
                  project: item.name,
                },
              });
            }
          } catch (error) {
            console.error(error);
          }

          window?.open(item.html_url, '_blank');
        }}
      >
        <div className="flex flex-col justify-between p-8 w-full h-full">
          <div>
            <div className="flex items-center">
              <div className="flex text-lg tracking-wide opacity-60 card-title text-base-content">
                <MdInsertLink className="my-auto" />
                <span>{item.name}</span>
              </div>
            </div>
            <p className="mt-1 mb-5 text-sm text-opacity-60 text-base-content">
              {item.description}
            </p>
          </div>
          <div className="flex justify-between text-sm text-opacity-60 text-base-content truncate">
            <div className="flex flex-grow">
              <span className="flex items-center mr-3">
                <AiOutlineStar className="mr-0.5" />
                <span>{item.stargazers_count}</span>
              </span>
              <span className="flex items-center">
                <AiOutlineFork className="mr-0.5" />
                <span>{item.forks_count}</span>
              </span>
            </div>
            <div>
              <span className="flex items-center">
                <div
                  className="mr-1 w-3 h-3 rounded-full opacity-60"
                  style={{ backgroundColor: languageColor(item.language) }}
                />
                <span>{item.language}</span>
              </span>
            </div>
          </div>
        </div>
      </a>
    ));
  };

  return (
    <Fragment>
      <div className="col-span-1 lg:col-span-2">
        <div className="grid grid-cols-2 gap-6">
          <div className="col-span-2">
            <div className="bg-opacity-40 shadow card compact bg-base-100">
              <div className="card-body">
                <div className="flex justify-between items-center mx-3 mb-2">
                  <h5 className="card-title">
                    {loading ? (
                      skeleton({ width: 'w-40', height: 'h-8' })
                    ) : (
                      <span className="opacity-70 text-base-content">
                        GitHub Projects
                      </span>
                    )}
                  </h5>
                  {loading ? (
                    skeleton({ width: 'w-10', height: 'h-5' })
                  ) : (
                    <a
                      href={`https://github.com/${github.username}?tab=repositories`}
                      target="_blank"
                      rel="noreferrer"
                      className="opacity-50 hover:underline text-base-content"
                    >
                      See All
                    </a>
                  )}
                </div>
                <div className="col-span-2"></div>
                <div className="col-span-2">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {loading || !repo ? renderSkeleton() : renderProjects()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Project.propTypes = {
  repo: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  github: PropTypes.object.isRequired,
  googleAnalytics: PropTypes.object.isRequired,
};

export default Project;
