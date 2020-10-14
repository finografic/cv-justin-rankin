import React, { forwardRef } from 'react';
import { camelize, capitalizeFirstLetter } from 'utils/stringUtils';

// OTHER ICONS
import { AiOutlineYoutube, AiFillYoutube, AiOutlineTwitter, AiFillFacebook } from 'react-icons/ai';
import { CgMenuRound } from 'react-icons/cg';
import { FaBlogger, FaCode, FaUndo } from 'react-icons/fa';
import { FcHighPriority, FcMediumPriority, FcOk, FcInfo } from 'react-icons/fc';
import { FiEdit } from 'react-icons/fi';
import { GoCheck } from 'react-icons/go';
import { GrView, GrInstagram, GrTwitter, GrVimeo, GrGallery } from 'react-icons/gr';
import { ImWarning, ImInfo } from 'react-icons/im';
import { MdMenuOpen, MdErrorOutline, MdExitToApp, MdSave } from 'react-icons/md';
import { RiSave3Fill, RiSave3Line, RiSaveLine } from 'react-icons/ri';

const iconizeKeys = (iconSet) => {
  let keysWithIconPrefix = Object.keys(iconSet).reduce(function (obj, key) {
    const newKey = capitalizeFirstLetter(camelize(`Icon ${key}`));
    return (obj[newKey] = iconSet[key]), obj;
  }, {});
  return keysWithIconPrefix;
};

/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
export const iconsSocial = {
  // OTHER ICONS
  youtube: forwardRef((props, ref) => <AiFillYoutube {...props} ref={ref} />),
  youtube2: forwardRef((props, ref) => <AiOutlineYoutube {...props} ref={ref} />),
  facebook: forwardRef((props, ref) => <AiFillFacebook {...props} ref={ref} />),
  instagram: forwardRef((props, ref) => <GrInstagram {...props} ref={ref} />),
  twitter1: forwardRef((props, ref) => <AiOutlineTwitter {...props} ref={ref} />),
  twitter2: forwardRef((props, ref) => <GrTwitter {...props} ref={ref} />),
  vimeo: forwardRef((props, ref) => <GrVimeo {...props} ref={ref} />),
  blogger: forwardRef((props, ref) => <FaBlogger {...props} ref={ref} />),
  embed: forwardRef((props, ref) => <FaCode {...props} ref={ref} />),
  gallery: forwardRef((props, ref) => <GrGallery {...props} ref={ref} />),
};

export const iconsMisc = {
  Code: forwardRef((props, ref) => <FaCode {...props} ref={ref} />),
  Gallery: forwardRef((props, ref) => <GrGallery {...props} ref={ref} />),
  // MenuOpen: forwardRef((props, ref) => <MdMenuOpen {...props} ref={ref} />),
  MenuOpen: forwardRef((props, ref) => <CgMenuRound {...props} ref={ref} />),
  ExitToApp: forwardRef((props, ref) => <MdExitToApp {...props} ref={ref} />),
  Embed: forwardRef((props, ref) => <FaCode {...props} ref={ref} />),
};

export const iconsActions = iconizeKeys({
  Edit: forwardRef((props, ref) => <FiEdit {...props} ref={ref} />),
  View: forwardRef((props, ref) => <GrView {...props} ref={ref} />),
  // Save: forwardRef((props, ref) => <MdSave {...props} ref={ref} />),
  // Save: forwardRef((props, ref) => <RiSave3Fill {...props} ref={ref} />),
  Save: forwardRef((props, ref) => <RiSave3Line {...props} ref={ref} />),
  Undo: forwardRef((props, ref) => <FaUndo {...props} ref={ref} />),
});

export const iconsValidation = iconizeKeys({
  Error: forwardRef((props, ref) => <MdErrorOutline {...props} ref={ref} />),
  Warning: forwardRef((props, ref) => <ImWarning {...props} ref={ref} />),
  Success: forwardRef((props, ref) => <GoCheck {...props} ref={ref} />),
  Info: forwardRef((props, ref) => <ImInfo {...props} ref={ref} />),
});

export const iconsColor = iconizeKeys({
  Error: forwardRef((props, ref) => <FcHighPriority {...props} ref={ref} />),
  Warning: forwardRef((props, ref) => <FcMediumPriority {...props} ref={ref} />),
  Success: forwardRef((props, ref) => <FcOk {...props} ref={ref} />),
  Info: forwardRef((props, ref) => <FcInfo {...props} ref={ref} />),
});

export const icons = {
  ...iconsSocial,
  ...iconsMisc,
  ...iconsActions,
  ...iconsValidation,
  ...iconsColor,
};

export default icons;

/* eslint-enable react/no-multi-comp */
/* eslint-enable react/display-name */

// https://material-ui.com/components/material-icons/
// https://material.io/resources/icons/
// https://react-icons.github.io/
