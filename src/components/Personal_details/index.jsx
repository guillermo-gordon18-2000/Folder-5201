import { MdLocationOn } from 'react-icons/md';
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillMediumSquare,
  AiFillIdcard,
  AiTwotoneHome,
  AiOutlineContacts,
} from 'react-icons/ai';
import { SiTwitter } from 'react-icons/si';
import { CgDribbble } from 'react-icons/cg';
import { RiPhoneFill, RiMailFill } from 'react-icons/ri';
import { Fragment } from 'react';
import { FaBehanceSquare, FaBuilding } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { skeleton } from '../../helpers/utils';

const isCompanyMention = (company) => {
  return company.startsWith('@') && !company.includes(' ');
};

const companyLink = (company) => {
  return `https://github.com/${company.substring(1)}`;
};

const getFormattedMastodonValue = (mastodonValue, isLink) => {
  const [username, server] = mastodonValue.split('@');

  if (isLink) {
    return `https://${server}/@${username}`;
  } else {
    return `${username}@${server}`;
  }
};

const ListItem = ({ icon, title, value, link, skeleton = false }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="flex justify-start items-center py-2 px-1"
    >
      <div className="flex flex-grow gap-2 items-center my-1 font-medium">
        {icon} {title}
      </div>
      <div
        className={`${
          skeleton ? 'flex-grow' : ''
        } text-sm font-normal text-right mr-2 ml-3 ${link ? 'truncate' : ''}`}
        style={{
          wordBreak: 'break-word',
        }}
      >
        {value}
      </div>
    </a>
  );
};

const Details_personal = ({ profile, loading, personal, github }) => {
  const renderSkeleton = () => {
    let array = [];
    for (let index = 0; index < 4; index++) {
      array.push(
        <ListItem
          key={index}
          skeleton={true}
          icon={skeleton({ width: 'w-4', height: 'h-4' })}
          title={skeleton({ width: 'w-24', height: 'h-4' })}
          value={skeleton({ width: 'w-full', height: 'h-4' })}
        />
      );
    }

    return array;
  };

  return (
    <div className="shadow-lg card compact bg-base-100">
      <div className="card-body">
        <div className="text-opacity-60 text-base-content">
          {loading || !profile ? (
            renderSkeleton()
          ) : (
            <Fragment>
              {profile.location && (
                <ListItem
                  icon={<MdLocationOn />}
                  title="Based in:"
                  value={profile.location}
                />
              )}
              {profile.company && (
                <ListItem
                  icon={<FaBuilding />}
                  title="Company:"
                  value={profile.company}
                  link={
                    isCompanyMention(profile.company.trim())
                      ? companyLink(profile.company.trim())
                      : null
                  }
                />
              )}
              <ListItem
                icon={<AiFillGithub />}
                title="GitHub:"
                value={github.username}
                link={`https://github.com/${github.username}`}
              />
              <ListItem
                icon={<AiFillIdcard />}
                title="Cedula:"
                value={'8-959-2011'}
                // link={`https://github.com/${github.username}`}
              />

              <ListItem
                icon={<AiTwotoneHome />}
                title="Direccion:"
                value={'Calle D,Plaza Valencia'}
                // link={`https://github.com/${github.username}`}
              />
              <ListItem
                icon={<AiOutlineContacts />}
                title="Fecha de nacimiento"
                value={'18 agosto  2000'}
                // link={`https://github.com/${github.username}`}
              />
              {/* {personal?.cedula && ( */}
              {/*   <ListItem */}
              {/*     icon={<SiTwitter />} */}
              {/*     title="Cedula:" */}
              {/*     value={'8-959-2011'} */}
              {/*     link={`https://twitter.com/${personal.cedula}`} */}
              {/*   /> */}
              {/* )} */}
              {/* {social?.mastodon && ( */}
              {/*   <ListItem */}
              {/*     icon={<FaMastodon />} */}
              {/*     title="Mastodon:" */}
              {/*     value={getFormattedMastodonValue(social.mastodon, false)} */}
              {/*     link={getFormattedMastodonValue(social.mastodon, true)} */}
              {/*   /> */}
              {/* )} */}
              {/* {social?.linkedin && ( */}
              {/*   <ListItem */}
              {/*     icon={<FaLinkedin />} */}
              {/*     title="LinkedIn:" */}
              {/*     value={social.linkedin} */}
              {/*     link={`https://www.linkedin.com/in/${social.linkedin}`} */}
              {/*   /> */}
              {/* )} */}
              {/* {social?.dribbble && ( */}
              {/*   <ListItem */}
              {/*     icon={<CgDribbble />} */}
              {/*     title="Dribbble:" */}
              {/*     value={social.dribbble} */}
              {/*     link={`https://dribbble.com/${social.dribbble}`} */}
              {/*   /> */}
              {/* )} */}
              {/* {social?.behance && ( */}
              {/*   <ListItem */}
              {/*     icon={<FaBehanceSquare />} */}
              {/*     title="Behance:" */}
              {/*     value={social.behance} */}
              {/*     link={`https://www.behance.net/${social.behance}`} */}
              {/*   /> */}
              {/* )} */}
              {/* {social?.facebook && ( */}
              {/*   <ListItem */}
              {/*     icon={<FaFacebook />} */}
              {/*     title="Facebook:" */}
              {/*     value={social.facebook} */}
              {/*     link={`https://www.facebook.com/${social.facebook}`} */}
              {/*   /> */}
              {/* )} */}
              {/* {social?.instagram && ( */}
              {/*   <ListItem */}
              {/*     icon={<AiFillInstagram />} */}
              {/*     title="Instagram:" */}
              {/*     value={social.instagram} */}
              {/*     link={`https://www.instagram.com/${social.instagram}`} */}
              {/*   /> */}
              {/* )} */}
              {/* {social?.medium && ( */}
              {/*   <ListItem */}
              {/*     icon={<AiFillMediumSquare />} */}
              {/*     title="Medium:" */}
              {/*     value={social.medium} */}
              {/*     link={`https://medium.com/@${social.medium}`} */}
              {/*   /> */}
              {/* )} */}
              {/* {social?.dev && ( */}
              {/*   <ListItem */}
              {/*     icon={<FaDev />} */}
              {/*     title="Dev:" */}
              {/*     value={social.dev} */}
              {/*     link={`https://dev.to/${social.dev}`} */}
              {/*   /> */}
              {/* )} */}
              {/* {social?.stackoverflow && ( */}
              {/*   <ListItem */}
              {/*     icon={<FaStackOverflow />} */}
              {/*     title="Stack Overflow:" */}
              {/*     value={social.stackoverflow.split('/').slice(-1)} */}
              {/*     link={`https://stackoverflow.com/users/${social.stackoverflow}`} */}
              {/*   /> */}
              {/* )} */}
              {/* {social?.website && ( */}
              {/*   <ListItem */}
              {/*     icon={<FaGlobe />} */}
              {/*     title="Website:" */}
              {/*     value={social.website} */}
              {/*     link={social.website} */}
              {/*   /> */}
              {/* )} */}
              {/* {social?.skype && ( */}
              {/*   <ListItem */}
              {/*     icon={<FaSkype />} */}
              {/*     title="Skype" */}
              {/*     value={social.skype} */}
              {/*     link={`skype:${social.skype}?chat`} */}
              {/*   /> */}
              {/* )} */}
              {/* {social?.telegram && ( */}
              {/*   <ListItem */}
              {/*     icon={<FaTelegram />} */}
              {/*     title="Telegram" */}
              {/*     value={social.telegram} */}
              {/*     link={`https://t.me/${social.telegram}`} */}
              {/*   /> */}
              {/* )} */}
              {/**/}
              {/* {social?.phone && ( */}
              {/*   <ListItem */}
              {/*     icon={<RiPhoneFill />} */}
              {/*     title="Phone:" */}
              {/*     value={social.phone} */}
              {/*     link={`tel:${social.phone}`} */}
              {/*   /> */}
              {/* )} */}
              {/* {social?.email && ( */}
              {/*   <ListItem */}
              {/*     icon={<RiMailFill />} */}
              {/*     title="Email:" */}
              {/*     value={social.email} */}
              {/*     link={`mailto:${social.email}`} */}
              {/*   /> */}
              {/* )} */}
            </Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

Details_personal.propTypes = {
  profile: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  personal: PropTypes.object.isRequired,
  github: PropTypes.object.isRequired,
};

ListItem.propTypes = {
  icon: PropTypes.node,
  title: PropTypes.node,
  value: PropTypes.node,
  link: PropTypes.string,
  skeleton: PropTypes.bool,
};

export default Details_personal;
