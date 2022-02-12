// Form properties [right panel]
export const formConf = {
  formRef: 'elForm',
  formModel: 'formModel',
  size: 'medium',
  labelPosition: 'right',
  labelWidth: 100,
  formRules: 'rules',
  gutter: 15,
  disabled: false,
  span: 24,
  formBtns: true
};

// Input components 【Left Panel】
export const inputComponents = [
  {
    // Custom configuration of components
    widgetSettings: {
      label: 'String',
      labelWidth: null,
      showLabel: true,
      changeTag: true,
      widget: 'el-input',
      tagIcon: 'input',
      defaultValue: undefined,
      required: true,
      layout: 'colFormItem',
      span: 24,
      document: 'https://element.eleme.cn/#/zh-CN/widgetSettings/input',
      // Regular check rule
      regList: []
    },
    // Component slot properties
    slot: {
      prepend: '',
      append: ''
    },
    // The rest are attributes that can be written directly on the widgetSettings level
    placeholder: 'please enter',
    style: { width: '100%' },
    clearable: true,
    'prefix-icon': '',
    'suffix-icon': '',
    maxlength: null,
    'show-word-limit': false,
    readonly: false,
    disabled: false
  },
  {
    widgetSettings: {
      label: 'Text',
      labelWidth: null,
      showLabel: true,
      widget: 'el-input',
      tagIcon: 'textarea',
      defaultValue: undefined,
      required: true,
      layout: 'colFormItem',
      span: 24,
      regList: [],
      changeTag: true,
      document: 'https://element.eleme.cn/#/zh-CN/widgetSettings/input'
    },
    type: 'textarea',
    placeholder: 'please enter',
    autosize: {
      minRows: 4,
      maxRows: 4
    },
    style: { width: '100%' },
    maxlength: null,
    'show-word-limit': false,
    readonly: false,
    disabled: false
  },
  {
    widgetSettings: {
      label: 'Password',
      showLabel: true,
      labelWidth: null,
      changeTag: true,
      widget: 'el-input',
      tagIcon: 'password',
      defaultValue: undefined,
      layout: 'colFormItem',
      span: 24,
      required: true,
      regList: [],
      document: 'https://element.eleme.cn/#/zh-CN/widgetSettings/input'
    },
    slot: {
      prepend: '',
      append: ''
    },
    placeholder: 'Please Enter',
    'show-password': true,
    style: { width: '100%' },
    clearable: true,
    'prefix-icon': '',
    'suffix-icon': '',
    maxlength: null,
    'show-word-limit': false,
    readonly: false,
    disabled: false
  },
  {
    widgetSettings: {
      label: 'Counter',
      showLabel: true,
      changeTag: true,
      labelWidth: null,
      widget: 'el-input-number',
      tagIcon: 'number',
      defaultValue: undefined,
      span: 24,
      layout: 'colFormItem',
      required: true,
      regList: [],
      document: 'https://element.eleme.cn/#/zh-CN/widgetSettings/input-number'
    },
    placeholder: '',
    min: undefined,
    max: undefined,
    step: 1,
    'step-strictly': false,
    precision: undefined,
    'controls-position': '',
    disabled: false
  },
  {
    widgetSettings: {
      label: 'Editor',
      showLabel: true,
      changeTag: true,
      labelWidth: null,
      widget: 'tinymce',
      tagIcon: 'rich-text',
      defaultValue: null,
      span: 24,
      layout: 'colFormItem',
      required: true,
      regList: [],
      document: 'http://tinymce.ax-z.cn'
    },
    placeholder: 'please enter',
    height: 300, // Editor height
    branding: false // Hide the brand mark in the lower right corner
  }
];

// Selective components 【Left Panel】
export const selectComponents = [
  {
    widgetSettings: {
      label: 'Selection',
      showLabel: true,
      labelWidth: null,
      widget: 'el-select',
      tagIcon: 'select',
      layout: 'colFormItem',
      span: 24,
      required: true,
      regList: [],
      changeTag: true,
      document: 'https://element.eleme.cn/#/zh-CN/widgetSettings/select'
    },
    slot: {
      options: [{
        label: 'Option one',
        value: 1
      }, {
        label: 'Option two',
        value: 2
      }]
    },
    placeholder: 'please choose',
    style: { width: '100%' },
    clearable: true,
    disabled: false,
    filterable: false,
    multiple: false
  },
  {
    widgetSettings: {
      label: 'Cascade',
      url: 'https://www.fastmock.site/mock/f8d7a54fb1e60561e2f720d5a810009d/fg/cascaderList',
      method: 'get',
      dataPath: 'list',
      dataConsumer: 'options',
      showLabel: true,
      labelWidth: null,
      widget: 'el-cascader',
      tagIcon: 'cascader',
      layout: 'colFormItem',
      defaultValue: [],
      dataType: 'dynamic',
      span: 24,
      required: true,
      regList: [],
      changeTag: true,
      document: 'https://element.eleme.cn/#/zh-CN/widgetSettings/cascader'
    },
    options: [{
      id: 1,
      value: 1,
      label: 'Option 1',
      children: [{
        id: 2,
        value: 2,
        label: 'Option 1-1'
      }]
    }],
    placeholder: 'please choose',
    style: { width: '100%' },
    props: {
      props: {
        multiple: false,
        label: 'label',
        value: 'value',
        children: 'children'
      }
    },
    'show-all-levels': true,
    disabled: false,
    clearable: true,
    filterable: false,
    separator: '/'
  },
  {
    widgetSettings: {
      label: 'Radio group',
      labelWidth: null,
      showLabel: true,
      widget: 'el-radio-group',
      tagIcon: 'radio',
      changeTag: true,
      defaultValue: undefined,
      layout: 'colFormItem',
      span: 24,
      optionType: 'default',
      regList: [],
      required: true,
      border: false,
      document: 'https://element.eleme.cn/#/zh-CN/widgetSettings/radio'
    },
    slot: {
      options: [{
        label: 'Option one',
        value: 1
      }, {
        label: 'Option two',
        value: 2
      }]
    },
    style: {},
    size: 'medium',
    disabled: false
  },
  {
    widgetSettings: {
      label: 'Checkboxes',
      widget: 'el-checkbox-group',
      tagIcon: 'checkbox',
      defaultValue: [],
      span: 24,
      showLabel: true,
      labelWidth: null,
      layout: 'colFormItem',
      optionType: 'default',
      required: true,
      regList: [],
      changeTag: true,
      border: false,
      document: 'https://element.eleme.cn/#/zh-CN/widgetSettings/checkbox'
    },
    slot: {
      options: [{
        label: 'Option one',
        value: 1
      }, {
        label: 'Option two',
        value: 2
      }]
    },
    style: {},
    size: 'medium',
    min: null,
    max: null,
    disabled: false
  },
  {
    widgetSettings: {
      label: 'power switch',
      widget: 'el-switch',
      tagIcon: 'switch',
      defaultValue: false,
      span: 24,
      showLabel: true,
      labelWidth: null,
      layout: 'colFormItem',
      required: true,
      regList: [],
      changeTag: true,
      document: 'https://element.eleme.cn/#/zh-CN/widgetSettings/switch'
    },
    style: {},
    disabled: false,
    'active-text': '',
    'inactive-text': '',
    'active-color': null,
    'inactive-color': null,
    'active-value': true,
    'inactive-value': false
  },
  {
    widgetSettings: {
      label: 'Slider',
      widget: 'el-slider',
      tagIcon: 'slider',
      defaultValue: null,
      span: 24,
      showLabel: true,
      layout: 'colFormItem',
      labelWidth: null,
      required: true,
      regList: [],
      changeTag: true,
      document: 'https://element.eleme.cn/#/zh-CN/widgetSettings/slider'
    },
    disabled: false,
    min: 0,
    max: 100,
    step: 1,
    'show-stops': false,
    range: false
  },
  {
    widgetSettings: {
      label: 'Time selection',
      widget: 'el-time-picker',
      tagIcon: 'time',
      defaultValue: null,
      span: 24,
      showLabel: true,
      layout: 'colFormItem',
      labelWidth: null,
      required: true,
      regList: [],
      changeTag: true,
      document: 'https://element.eleme.cn/#/zh-CN/widgetSettings/time-picker'
    },
    placeholder: 'please choose',
    style: { width: '100%' },
    disabled: false,
    clearable: true,
    'picker-options': {
      selectableRange: '00:00:00-23:59:59'
    },
    format: 'HH:mm:ss',
    'value-format': 'HH:mm:ss'
  },
  {
    widgetSettings: {
      label: 'time limit',
      widget: 'el-time-picker',
      tagIcon: 'time-range',
      span: 24,
      showLabel: true,
      labelWidth: null,
      layout: 'colFormItem',
      defaultValue: null,
      required: true,
      regList: [],
      changeTag: true,
      document: 'https://element.eleme.cn/#/zh-CN/widgetSettings/time-picker'
    },
    style: { width: '100%' },
    disabled: false,
    clearable: true,
    'is-range': true,
    'range-separator': 'to',
    'start-placeholder': 'Starting time',
    'end-placeholder': 'End Time',
    format: 'HH:mm:ss',
    'value-format': 'HH:mm:ss'
  },
  {
    widgetSettings: {
      label: 'Date selection',
      widget: 'el-date-picker',
      tagIcon: 'date',
      defaultValue: null,
      showLabel: true,
      labelWidth: null,
      span: 24,
      layout: 'colFormItem',
      required: true,
      regList: [],
      changeTag: true,
      document: 'https://element.eleme.cn/#/zh-CN/widgetSettings/date-picker'
    },
    placeholder: 'please choose',
    type: 'date',
    style: { width: '100%' },
    disabled: false,
    clearable: true,
    format: 'yyyy-MM-dd',
    'value-format': 'yyyy-MM-dd',
    readonly: false
  },
  {
    widgetSettings: {
      label: 'Date range',
      widget: 'el-date-picker',
      tagIcon: 'date-range',
      defaultValue: null,
      span: 24,
      showLabel: true,
      labelWidth: null,
      required: true,
      layout: 'colFormItem',
      regList: [],
      changeTag: true,
      document: 'https://element.eleme.cn/#/zh-CN/widgetSettings/date-picker'
    },
    style: { width: '100%' },
    type: 'daterange',
    'range-separator': 'to',
    'start-placeholder': 'start date',
    'end-placeholder': 'End date',
    disabled: false,
    clearable: true,
    format: 'yyyy-MM-dd',
    'value-format': 'yyyy-MM-dd',
    readonly: false
  },
  {
    widgetSettings: {
      label: 'score',
      widget: 'el-rate',
      tagIcon: 'rate',
      defaultValue: 0,
      span: 24,
      showLabel: true,
      labelWidth: null,
      layout: 'colFormItem',
      required: true,
      regList: [],
      changeTag: true,
      document: 'https://element.eleme.cn/#/zh-CN/widgetSettings/rate'
    },
    style: {},
    max: 5,
    'allow-half': false,
    'show-text': false,
    'show-score': false,
    disabled: false
  },
  {
    widgetSettings: {
      label: 'Color Picker',
      widget: 'el-color-picker',
      tagIcon: 'color',
      span: 24,
      defaultValue: null,
      showLabel: true,
      labelWidth: null,
      layout: 'colFormItem',
      required: true,
      regList: [],
      changeTag: true,
      document: 'https://element.eleme.cn/#/zh-CN/widgetSettings/color-picker'
    },
    'show-alpha': false,
    'color-format': '',
    disabled: false,
    size: 'medium'
  },
  {
    widgetSettings: {
      label: 'Upload',
      widget: 'el-upload',
      tagIcon: 'upload',
      layout: 'colFormItem',
      defaultValue: null,
      showLabel: true,
      labelWidth: null,
      required: true,
      span: 24,
      showTip: false,
      buttonText: 'Click upload',
      regList: [],
      changeTag: true,
      fileSize: 2,
      sizeUnit: 'MB',
      document: 'https://element.eleme.cn/#/zh-CN/widgetSettings/upload'
    },
    slot: {
      'list-type': true
    },
    action: 'https://jsonplaceholder.typicode.com/posts/',
    disabled: false,
    accept: '',
    name: 'file',
    'auto-upload': true,
    'list-type': 'text',
    multiple: false
  }
];

// Layout widgetSettings 【Left Panel】
export const layoutComponents = [
  {
    widgetSettings: {
      layout: 'rowFormItem',
      tagIcon: 'row',
      label: 'Row container',
      layoutTree: true,
      document: 'https://element.eleme.cn/#/zh-CN/widgetSettings/layout#row-attributes'
    },
    type: 'default',
    justify: 'start',
    align: 'top'
  },
  {
    widgetSettings: {
      label: 'push button',
      showLabel: true,
      changeTag: true,
      labelWidth: null,
      widget: 'el-button',
      tagIcon: 'button',
      span: 24,
      layout: 'colFormItem',
      document: 'https://element.eleme.cn/#/zh-CN/widgetSettings/button'
    },
    slot: {
      default: 'Main button'
    },
    type: 'primary',
    icon: 'el-icon-search',
    round: false,
    size: 'medium',
    plain: false,
    circle: false,
    disabled: false
  },
  {
    widgetSettings: {
      layout: 'colFormItem',
      tagIcon: 'table',
      widget: 'form-designer-preview',
      document: 'https://element.eleme.cn/#/zh-CN/widgetSettings/table',
      span: 24,
      formId: 101,
      renderKey: 1595761764203,
      componentName: 'row101',
      showLabel: true,
      changeTag: true,
      labelWidth: null,
      label: 'Form',
      dataType: Object
      /* method: 'get',
      dataPath: 'list',
      dataConsumer: 'data',
      url: 'https://www.fastmock.site/mock/f8d7a54fb1e60561e2f720d5a810009d/fg/tableData',
      children: [{
        widgetSettings: {
          layout: 'raw',
          widget: 'el-table-column',
          renderKey: 15957617660153
        },
        prop: 'date',
        label: '日期'
      }, {
        widgetSettings: {
          layout: 'raw',
          widget: 'el-table-column',
          renderKey: 15957617660152
        },
        prop: 'address',
        label: 'Address'
      }, {
        widgetSettings: {
          layout: 'raw',
          widget: 'el-table-column',
          renderKey: 15957617660151
        },
        prop: 'name',
        label: 'name'
      }, {
        widgetSettings: {
          layout: 'raw',
          widget: 'el-table-column',
          renderKey: 1595774496335,
          children: [
            {
              widgetSettings: {
                label: 'push button',
                widget: 'el-button',
                tagIcon: 'button',
                layout: 'raw',
                renderKey: 1595779809901
              },
              slot: {
                default: 'Main button'
              },
              type: 'primary',
              icon: 'el-icon-search',
              round: false,
              size: 'medium'
            }
          ]
        },
        label: 'operational'
      }]*/
    },
    data: [],
    directives: [{
      name: 'loading',
      value: false
    }],
    border: true,
    type: 'default',
    justify: 'start',
    align: 'top'
  }
];