import { Fragment } from 'react';
import PropTypes from 'prop-types';
import { ga, skeleton } from '../../helpers/utils';
import LazyImage from '../lazy-image';

const displaySection = (externalProjects) => {
  if (
    externalProjects &&
    Array.isArray(externalProjects) &&
    externalProjects.length
  ) {
    return true;
  } else {
    return false;
  }
};

const ExternalProject = ({ externalProjects, loading, googleAnalytics }) => {
  const renderSkeleton = () => {
    let array = [];
    for (let index = 0; index < externalProjects.length; index++) {
      array.push(
        <div className="shadow-lg card compact bg-base-100" key={index}>
          <div className="p-8 w-full h-full">
            <div className="flex flex-col items-center">
              <div className="w-full">
                <div className="flex items-start px-4">
                  <div className="w-full">
                    <h2>
                      {skeleton({
                        width: 'w-32',
                        height: 'h-8',
                        className: 'mb-2 mx-auto',
                      })}
                    </h2>
                    <div className="w-full h-full avatar">
                      <div className="mx-auto w-20 h-20 mask mask-squircle">
                        {skeleton({
                          width: 'w-full',
                          height: 'h-full',
                          shape: '',
                        })}
                      </div>
                    </div>
                    <div className="mt-2">
                      {skeleton({
                        width: 'w-full',
                        height: 'h-4',
                        className: 'mx-auto',
                      })}
                    </div>
                    <div className="flex flex-wrap justify-center items-center mt-2">
                      {skeleton({
                        width: 'w-full',
                        height: 'h-4',
                        className: 'mx-auto',
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return array;
  };

  const renderExternalProjects = () => {
    return externalProjects.map((item, index) => (
      <a
        className="shadow-lg cursor-pointer card compact bg-base-100"
        key={index}
        href={item.link}
        onClick={(e) => {
          e.preventDefault();

          try {
            if (googleAnalytics?.id) {
              ga.event({
                action: 'Click External Project',
                params: {
                  post: item.title,
                },
              });
            }
          } catch (error) {
            console.error(error);
          }

          window?.open(item.link, '_blank');
        }}
      >
        <div className="p-8 w-full h-full">
          <div className="flex flex-col items-center">
            <div className="w-full">
              <div className="px-4">
                <div className="w-full text-center">
                  <h2 className="mb-2 text-lg font-semibold tracking-wide text-center opacity-60">
                    {item.title}
                  </h2>
                  {/* {item.imageUrl && ( */}
                  {/*   <div className="opacity-90 avatar"> */}
                  {/*     <div className="w-20 h-20 mask mask-squircle"> */}
                  {/*       <LazyImage */}
                  {/*         src={item.imageUrl} */}
                  {/*         alt={'thumbnail'} */}
                  {/*         placeholder={skeleton({ */}
                  {/*           width: 'w-full', */}
                  {/*           height: 'h-full', */}
                  {/*           shape: '', */}
                  {/*         })} */}
                  {/*       /> */}
                  {/*     </div> */}
                  {/*   </div> */}
                  {/* )} */}
                  <p className="mt-1 text-sm text-opacity-60 text-base-content">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    ));
  };

  return (
    <Fragment>
      {displaySection(externalProjects) && (
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
                          Perfil
                        </span>
                      )}
                    </h5>
                  </div>
                  <div className="col-span-2">
                    <div className="grid grid-cols-1 gap-6">
                      {loading ? renderSkeleton() : renderExternalProjects()}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

ExternalProject.propTypes = {
  externalProjects: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  googleAnalytics: PropTypes.object,
};

export default ExternalProject;
