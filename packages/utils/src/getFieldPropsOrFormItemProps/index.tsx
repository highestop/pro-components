﻿import type { FormInstance } from 'antd';

/**
 * 因为 fieldProps 支持了 function 所以新增了这个方法
 *
 * @param fieldProps
 * @param form
 */
const getFieldPropsOrFormItemProps = (
  fieldProps: any,
  form?: FormInstance<any> | null,
  extraProps?: any,
): Record<string, any> & {
  onChange: any;
  colSize: number;
} => {
  if (form === undefined) {
    return {} as any;
  }
  if (typeof fieldProps === 'function') {
    return fieldProps(form, extraProps);
  }
  return fieldProps;
};

export default getFieldPropsOrFormItemProps;
