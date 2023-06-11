import Guid from '@/modules/list/components/widgets/guid';
import BaseWidget from '@/modules/list/components/widgets/base-widget';
import Number from '@/modules/list/components/widgets/number';
import DateTime from '@/modules/list/components/widgets/datetime';
import Date from '@/modules/list/components/widgets/date';
import Reference from '@/modules/list/components/widgets/reference';
import BooleanWidget from '@/modules/list/components/widgets/boolean-widget';

export const LIST_WIDGETS = {
  uuid: { widget: Guid, width: 250, sortable: false },
  boolean: { widget: BooleanWidget, width: 100, sortable: true, minWidth: 80 },
  number: { widget: Number, width: 100, sortable: true },
  integer: { widget: Number, width: 100, sortable: true },
  datetime: { widget: DateTime, width: 175, sortable: true },
  date: { widget: Date, width: 175, sortable: true },
  input: { widget: BaseWidget, width: 175, sortable: false },
  string: { widget: BaseWidget, width: 175, sortable: true },
  reference: { widget: Reference, width: 175, sortable: false },
};
