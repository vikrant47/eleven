import { BaseWidget } from '@/modules/form/components/widgets/base-widget/base-widget';

export default class InputWidget extends BaseWidget {
  palletSettings = {
    label: 'Input',
    icon: 'input'
  };

  constructor(settings = {}) {
    if (settings.fieldSettings && settings.fieldSettings.type === 'password') {
      settings.fieldSettings.showPassword = true;
    }
    super(settings);
  }

  prefix(h, key) {
    return `<template slot="prefix">${this.slot[key]}</template>`;
  }

  suffix(h, key) {
    return `<template slot="suffix">${this.slot[key]}</template>`;
  }

  prepend(h, key) {
    return `<template slot="prepend">${this.slot[key]}</template>`;
  }

  append(h, key) {
    return `<template slot="append">${this.slot[key]}</template>`;
  }
}
