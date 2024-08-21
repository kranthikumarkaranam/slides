import {StyleSheet} from 'react-native';

const colors = {
    brandColor: `#1ba94c`,
    brandDisabled : '#ccf7db'
};
export default StyleSheet.create({
    '0_600_1_400_display_swap____body': {
        'margin': '0',
        'padding': '0',
    },
    // 'root': {
    //     '-brandColor': '#1ba94c',
    //     '-brandRgb': '27, 169, 76',
    //     '-brandHover': '#22d560',
    //     '-brandDark': '#147d38',
    //     '-brandDisabled': '#ccf7db',
    //     '-brandBoxShadow': 'rgba(27, 169, 76, 0.5)',
    //     '-brandBoxShadowHover': 'rgba(27, 169, 76, 0.4)',
    //     '-primaryColor': '#1ba94c',
    //     '-primaryRgb': '27, 169, 76',
    //     '-primaryHover': '#22d560',
    //     '-primaryDark': '#147d38',
    //     '-primaryDisabled': '#ccf7db',
    //     '-primaryBoxShadow': 'rgba(27, 169, 76, 0.5)',
    //     '-primaryBoxShadowHover': 'rgba(27, 169, 76, 0.4)',
    //     '-secondaryColor': '#097bbf',
    //     '-secondaryRgb': '9, 123, 191',
    //     '-secondaryHover': '#0b9af0',
    //     '-secondaryDark': '#075c8e',
    //     '-secondaryDisabled': '#caeafd',
    //     '-secondaryBoxShadow': 'rgba(9, 123, 191, 0.5)',
    //     '-secondaryBoxShadowHover': 'rgba(9, 123, 191, 0.4)',
    //     '-errorColor': '#a93c32',
    //     '-errorRgb': '169, 60, 50',
    //     '-errorHover': '#c85146',
    //     '-errorDark': '#822e26',
    //     '-errorDisabled': '#f7e5e3',
    //     '-errorBoxShadow': 'rgba(169, 60, 50, 0.5)',
    //     '-errorBoxShadowHover': 'rgba(169, 60, 50, 0.4)',
    //     '-successColor': '#22a97a',
    //     '-successRgb': '34, 169, 122',
    //     '-successHover': '#2bd399',
    //     '-successDark': '#197f5b',
    //     '-successDisabled': '#d4f6ea',
    //     '-successBoxShadow': 'rgba(34, 169, 122, 0.5)',
    //     '-successBoxShadowHover': 'rgba(34, 169, 122, 0.4)',
    //     '-disabledColor': '#6EA989',
    //     '-appBackground': 'linear-gradient(to bottom, #fff 0%, #f3f7f7 100%)',
    //     '-fontFamilySansSerif': '\'Open Sans\', sans-serif',
    //     '-headingColor': '#3a424e',
    //     '-linkColor': '#5fa6ff',
    //     '-linkColorHover': '#447dbd',
    //     '-disabledTextColor': '#b7c9cc',
    //     '-toolbarBackgroundColor': '#39424e',
    //     '-toolbarBoxShadowColor': 'rgba(115, 143, 147, 0.3)',
    //     '-toolbarBorderColor': '#28313d',
    //     '-cardShadowColor': 'rgba(99, 118, 129, 0.3)',
    //     '-cardHoverShadowColor': 'rgba(99, 118, 129, 0.5)',
    //     '-cardMarginGutter': '0px',
    // },
    'body': {
// //         'backgroundColor': 'var(--app-backgroundColor)',
        'minHeight': 'calc(100vh)',
    },
    'flex': {
        'display': 'flex',
    },
    'none': {
        'display': 'none',
    },
    'layout_row': {
        'display': 'flex',
        'flexDirection': 'row',
    },
    'layout_row_reverse': {
        'display': 'flex',
        'flexDirection': 'row-reverse',
    },
    'layout_column': {
        'display': 'flex',
        'flexDirection': 'column',
    },
    'layout_column_reverse': {
        'display': 'flex',
        'flexDirection': 'column-reverse',
    },
    'nowrap': {
        'flexWrap': 'nowrap',
    },
    'wrap': {
        'flexWrap': 'wrap',
    },
    'wrap_reverse': {
        'flexWrap': 'wrap-reverse',
    },
    'justify_content_end': {
        'justifyContent': 'flex-end',
    },
    'justify_content_start': {
        'justifyContent': 'flex-start',
    },
    'justify_content_center': {
        'justifyContent': 'center',
    },
    'justify_content_around': {
        'justifyContent': 'space-around',
    },
    'justify_content_between': {
        'justifyContent': 'space-between',
    },
    'align_items_start': {
        'alignItems': 'flex-start',
    },
    'align_items_center': {
        'alignItems': 'center',
    },
    'align_items_end': {
        'alignItems': 'flex-end',
    },
    'align_items_stretch': {
        'alignItems': 'stretch',
    },
    'align_items_baseline': {
        'alignItems': 'baseline',
    },
    'fill_height': {
        'minHeight': '100vh',
    },
    'flex_grow_none': {
        'flexGrow': 0,
    },
    'flex_grow': {
        'flexGrow': 1,
    },
    'flex_shrink_none': {
        'flexShrink': 0,
    },
    'flex_shrink': {
        'flexShrink': 1,
    },
    'flex_basis_auto': {
        'flexBasis': 'auto',
    },
    'flex_basis_none': {
        'flexBasis': 0,
    },
    'align_self_auto': {
        'alignSelf': 'auto',
    },
    'align_self_start': {
        'alignSelf': 'flex-start',
    },
    'align_self_center': {
        'alignSelf': 'center',
    },
    'align_self_end': {
        'alignSelf': 'flex-end',
    },
    'align_self_stretch': {
        'alignSelf': 'stretch',
    },
    'align_self_baseline': {
        'alignSelf': 'baseline',
    },
    'mt_0': {
        'marginTop': '0px',
    },
    'pt_0': {
        'paddingTop': '0px',
    },
    'mb_0': {
        'marginBottom': '0px',
    },
    'pb_0': {
        'paddingBottom': '0px',
    },
    'ml_0': {
        'marginLeft': '0px',
    },
    'pl_0': {
        'paddingLeft': '0px',
    },
    'mr_0': {
        'marginRight': '0px',
    },
    'pr_0': {
        'paddingRight': '0px',
    },
    'w_0': {
        'width': '0%',
    },
    'h_0': {
        'height': '0%',
    },
    'mx_0': {
        'marginLeft': '0px',
        'marginRight': '0px',
    },
    'my_0': {
        'marginTop': '0px',
        'marginBottom': '0px',
    },
    'ma_0': {
        'margin': '0px',
    },
    'px_0': {
        'paddingLeft': '0px',
        'paddingRight': '0px',
    },
    'py_0': {
        'paddingTop': '0px',
        'paddingBottom': '0px',
    },
    'pa_0': {
        'padding': '0px',
    },
    'mt_1': {
        'marginTop': '1px',
    },
    'pt_1': {
        'paddingTop': '1px',
    },
    'mb_1': {
        'marginBottom': '1px',
    },
    'pb_1': {
        'paddingBottom': '1px',
    },
    'ml_1': {
        'marginLeft': '1px',
    },
    'pl_1': {
        'paddingLeft': '1px',
    },
    'mr_1': {
        'marginRight': '1px',
    },
    'pr_1': {
        'paddingRight': '1px',
    },
    'w_1': {
        'width': '1%',
    },
    'h_1': {
        'height': '1%',
    },
    'mx_1': {
        'marginLeft': '1px',
        'marginRight': '1px',
    },
    'my_1': {
        'marginTop': '1px',
        'marginBottom': '1px',
    },
    'ma_1': {
        'margin': '1px',
    },
    'px_1': {
        'paddingLeft': '1px',
        'paddingRight': '1px',
    },
    'py_1': {
        'paddingTop': '1px',
        'paddingBottom': '1px',
    },
    'pa_1': {
        'padding': '1px',
    },
    'mt_2': {
        'marginTop': '2px',
    },
    'pt_2': {
        'paddingTop': '2px',
    },
    'mb_2': {
        'marginBottom': '2px',
    },
    'pb_2': {
        'paddingBottom': '2px',
    },
    'ml_2': {
        'marginLeft': '2px',
    },
    'pl_2': {
        'paddingLeft': '2px',
    },
    'mr_2': {
        'marginRight': '2px',
    },
    'pr_2': {
        'paddingRight': '2px',
    },
    'w_2': {
        'width': '2%',
    },
    'h_2': {
        'height': '2%',
    },
    'mx_2': {
        'marginLeft': '2px',
        'marginRight': '2px',
    },
    'my_2': {
        'marginTop': '2px',
        'marginBottom': '2px',
    },
    'ma_2': {
        'margin': '2px',
    },
    'px_2': {
        'paddingLeft': '2px',
        'paddingRight': '2px',
    },
    'py_2': {
        'paddingTop': '2px',
        'paddingBottom': '2px',
    },
    'pa_2': {
        'padding': '2px',
    },
    'mt_3': {
        'marginTop': '3px',
    },
    'pt_3': {
        'paddingTop': '3px',
    },
    'mb_3': {
        'marginBottom': '3px',
    },
    'pb_3': {
        'paddingBottom': '3px',
    },
    'ml_3': {
        'marginLeft': '3px',
    },
    'pl_3': {
        'paddingLeft': '3px',
    },
    'mr_3': {
        'marginRight': '3px',
    },
    'pr_3': {
        'paddingRight': '3px',
    },
    'w_3': {
        'width': '3%',
    },
    'h_3': {
        'height': '3%',
    },
    'mx_3': {
        'marginLeft': '3px',
        'marginRight': '3px',
    },
    'my_3': {
        'marginTop': '3px',
        'marginBottom': '3px',
    },
    'ma_3': {
        'margin': '3px',
    },
    'px_3': {
        'paddingLeft': '3px',
        'paddingRight': '3px',
    },
    'py_3': {
        'paddingTop': '3px',
        'paddingBottom': '3px',
    },
    'pa_3': {
        'padding': '3px',
    },
    'mt_4': {
        'marginTop': '4px',
    },
    'pt_4': {
        'paddingTop': '4px',
    },
    'mb_4': {
        'marginBottom': '4px',
    },
    'pb_4': {
        'paddingBottom': '4px',
    },
    'ml_4': {
        'marginLeft': '4px',
    },
    'pl_4': {
        'paddingLeft': '4px',
    },
    'mr_4': {
        'marginRight': '4px',
    },
    'pr_4': {
        'paddingRight': '4px',
    },
    'w_4': {
        'width': '4%',
    },
    'h_4': {
        'height': '4%',
    },
    'mx_4': {
        'marginLeft': '4px',
        'marginRight': '4px',
    },
    'my_4': {
        'marginTop': '4px',
        'marginBottom': '4px',
    },
    'ma_4': {
        'margin': '4px',
    },
    'px_4': {
        'paddingLeft': '4px',
        'paddingRight': '4px',
    },
    'py_4': {
        'paddingTop': '4px',
        'paddingBottom': '4px',
    },
    'pa_4': {
        'padding': '4px',
    },
    'mt_5': {
        'marginTop': '5px',
    },
    'pt_5': {
        'paddingTop': '5px',
    },
    'mb_5': {
        'marginBottom': '5px',
    },
    'pb_5': {
        'paddingBottom': '5px',
    },
    'ml_5': {
        'marginLeft': '5px',
    },
    'pl_5': {
        'paddingLeft': '5px',
    },
    'mr_5': {
        'marginRight': '5px',
    },
    'pr_5': {
        'paddingRight': '5px',
    },
    'w_5': {
        'width': '5%',
    },
    'h_5': {
        'height': '5%',
    },
    'mx_5': {
        'marginLeft': '5px',
        'marginRight': '5px',
    },
    'my_5': {
        'marginTop': '5px',
        'marginBottom': '5px',
    },
    'ma_5': {
        'margin': '5px',
    },
    'px_5': {
        'paddingLeft': '5px',
        'paddingRight': '5px',
    },
    'py_5': {
        'paddingTop': '5px',
        'paddingBottom': '5px',
    },
    'pa_5': {
        'padding': '5px',
    },
    'mt_6': {
        'marginTop': '6px',
    },
    'pt_6': {
        'paddingTop': '6px',
    },
    'mb_6': {
        'marginBottom': '6px',
    },
    'pb_6': {
        'paddingBottom': '6px',
    },
    'ml_6': {
        'marginLeft': '6px',
    },
    'pl_6': {
        'paddingLeft': '6px',
    },
    'mr_6': {
        'marginRight': '6px',
    },
    'pr_6': {
        'paddingRight': '6px',
    },
    'w_6': {
        'width': '6%',
    },
    'h_6': {
        'height': '6%',
    },
    'mx_6': {
        'marginLeft': '6px',
        'marginRight': '6px',
    },
    'my_6': {
        'marginTop': '6px',
        'marginBottom': '6px',
    },
    'ma_6': {
        'margin': '6px',
    },
    'px_6': {
        'paddingLeft': '6px',
        'paddingRight': '6px',
    },
    'py_6': {
        'paddingTop': '6px',
        'paddingBottom': '6px',
    },
    'pa_6': {
        'padding': '6px',
    },
    'mt_7': {
        'marginTop': '7px',
    },
    'pt_7': {
        'paddingTop': '7px',
    },
    'mb_7': {
        'marginBottom': '7px',
    },
    'pb_7': {
        'paddingBottom': '7px',
    },
    'ml_7': {
        'marginLeft': '7px',
    },
    'pl_7': {
        'paddingLeft': '7px',
    },
    'mr_7': {
        'marginRight': '7px',
    },
    'pr_7': {
        'paddingRight': '7px',
    },
    'w_7': {
        'width': '7%',
    },
    'h_7': {
        'height': '7%',
    },
    'mx_7': {
        'marginLeft': '7px',
        'marginRight': '7px',
    },
    'my_7': {
        'marginTop': '7px',
        'marginBottom': '7px',
    },
    'ma_7': {
        'margin': '7px',
    },
    'px_7': {
        'paddingLeft': '7px',
        'paddingRight': '7px',
    },
    'py_7': {
        'paddingTop': '7px',
        'paddingBottom': '7px',
    },
    'pa_7': {
        'padding': '7px',
    },
    'mt_8': {
        'marginTop': '8px',
    },
    'pt_8': {
        'paddingTop': '8px',
    },
    'mb_8': {
        'marginBottom': '8px',
    },
    'pb_8': {
        'paddingBottom': '8px',
    },
    'ml_8': {
        'marginLeft': '8px',
    },
    'pl_8': {
        'paddingLeft': '8px',
    },
    'mr_8': {
        'marginRight': '8px',
    },
    'pr_8': {
        'paddingRight': '8px',
    },
    'w_8': {
        'width': '8%',
    },
    'h_8': {
        'height': '8%',
    },
    'mx_8': {
        'marginLeft': '8px',
        'marginRight': '8px',
    },
    'my_8': {
        'marginTop': '8px',
        'marginBottom': '8px',
    },
    'ma_8': {
        'margin': '8px',
    },
    'px_8': {
        'paddingLeft': '8px',
        'paddingRight': '8px',
    },
    'py_8': {
        'paddingTop': '8px',
        'paddingBottom': '8px',
    },
    'pa_8': {
        'padding': '8px',
    },
    'mt_9': {
        'marginTop': '9px',
    },
    'pt_9': {
        'paddingTop': '9px',
    },
    'mb_9': {
        'marginBottom': '9px',
    },
    'pb_9': {
        'paddingBottom': '9px',
    },
    'ml_9': {
        'marginLeft': '9px',
    },
    'pl_9': {
        'paddingLeft': '9px',
    },
    'mr_9': {
        'marginRight': '9px',
    },
    'pr_9': {
        'paddingRight': '9px',
    },
    'w_9': {
        'width': '9%',
    },
    'h_9': {
        'height': '9%',
    },
    'mx_9': {
        'marginLeft': '9px',
        'marginRight': '9px',
    },
    'my_9': {
        'marginTop': '9px',
        'marginBottom': '9px',
    },
    'ma_9': {
        'margin': '9px',
    },
    'px_9': {
        'paddingLeft': '9px',
        'paddingRight': '9px',
    },
    'py_9': {
        'paddingTop': '9px',
        'paddingBottom': '9px',
    },
    'pa_9': {
        'padding': '9px',
    },
    'mt_10': {
        'marginTop': '10px',
    },
    'pt_10': {
        'paddingTop': '10px',
    },
    'mb_10': {
        'marginBottom': '10px',
    },
    'pb_10': {
        'paddingBottom': '10px',
    },
    'ml_10': {
        'marginLeft': '10px',
    },
    'pl_10': {
        'paddingLeft': '10px',
    },
    'mr_10': {
        'marginRight': '10px',
    },
    'pr_10': {
        'paddingRight': '10px',
    },
    'w_10': {
        'width': '10%',
    },
    'h_10': {
        'height': '10%',
    },
    'mx_10': {
        'marginLeft': '10px',
        'marginRight': '10px',
    },
    'my_10': {
        'marginTop': '10px',
        'marginBottom': '10px',
    },
    'ma_10': {
        'margin': '10px',
    },
    'px_10': {
        'paddingLeft': '10px',
        'paddingRight': '10px',
    },
    'py_10': {
        'paddingTop': '10px',
        'paddingBottom': '10px',
    },
    'pa_10': {
        'padding': '10px',
    },
    'mt_11': {
        'marginTop': '11px',
    },
    'pt_11': {
        'paddingTop': '11px',
    },
    'mb_11': {
        'marginBottom': '11px',
    },
    'pb_11': {
        'paddingBottom': '11px',
    },
    'ml_11': {
        'marginLeft': '11px',
    },
    'pl_11': {
        'paddingLeft': '11px',
    },
    'mr_11': {
        'marginRight': '11px',
    },
    'pr_11': {
        'paddingRight': '11px',
    },
    'w_11': {
        'width': '11%',
    },
    'h_11': {
        'height': '11%',
    },
    'mx_11': {
        'marginLeft': '11px',
        'marginRight': '11px',
    },
    'my_11': {
        'marginTop': '11px',
        'marginBottom': '11px',
    },
    'ma_11': {
        'margin': '11px',
    },
    'px_11': {
        'paddingLeft': '11px',
        'paddingRight': '11px',
    },
    'py_11': {
        'paddingTop': '11px',
        'paddingBottom': '11px',
    },
    'pa_11': {
        'padding': '11px',
    },
    'mt_12': {
        'marginTop': '12px',
    },
    'pt_12': {
        'paddingTop': '12px',
    },
    'mb_12': {
        'marginBottom': '12px',
    },
    'pb_12': {
        'paddingBottom': '12px',
    },
    'ml_12': {
        'marginLeft': '12px',
    },
    'pl_12': {
        'paddingLeft': '12px',
    },
    'mr_12': {
        'marginRight': '12px',
    },
    'pr_12': {
        'paddingRight': '12px',
    },
    'w_12': {
        'width': '12%',
    },
    'h_12': {
        'height': '12%',
    },
    'mx_12': {
        'marginLeft': '12px',
        'marginRight': '12px',
    },
    'my_12': {
        'marginTop': '12px',
        'marginBottom': '12px',
    },
    'ma_12': {
        'margin': '12px',
    },
    'px_12': {
        'paddingLeft': '12px',
        'paddingRight': '12px',
    },
    'py_12': {
        'paddingTop': '12px',
        'paddingBottom': '12px',
    },
    'pa_12': {
        'padding': '12px',
    },
    'mt_13': {
        'marginTop': '13px',
    },
    'pt_13': {
        'paddingTop': '13px',
    },
    'mb_13': {
        'marginBottom': '13px',
    },
    'pb_13': {
        'paddingBottom': '13px',
    },
    'ml_13': {
        'marginLeft': '13px',
    },
    'pl_13': {
        'paddingLeft': '13px',
    },
    'mr_13': {
        'marginRight': '13px',
    },
    'pr_13': {
        'paddingRight': '13px',
    },
    'w_13': {
        'width': '13%',
    },
    'h_13': {
        'height': '13%',
    },
    'mx_13': {
        'marginLeft': '13px',
        'marginRight': '13px',
    },
    'my_13': {
        'marginTop': '13px',
        'marginBottom': '13px',
    },
    'ma_13': {
        'margin': '13px',
    },
    'px_13': {
        'paddingLeft': '13px',
        'paddingRight': '13px',
    },
    'py_13': {
        'paddingTop': '13px',
        'paddingBottom': '13px',
    },
    'pa_13': {
        'padding': '13px',
    },
    'mt_14': {
        'marginTop': '14px',
    },
    'pt_14': {
        'paddingTop': '14px',
    },
    'mb_14': {
        'marginBottom': '14px',
    },
    'pb_14': {
        'paddingBottom': '14px',
    },
    'ml_14': {
        'marginLeft': '14px',
    },
    'pl_14': {
        'paddingLeft': '14px',
    },
    'mr_14': {
        'marginRight': '14px',
    },
    'pr_14': {
        'paddingRight': '14px',
    },
    'w_14': {
        'width': '14%',
    },
    'h_14': {
        'height': '14%',
    },
    'mx_14': {
        'marginLeft': '14px',
        'marginRight': '14px',
    },
    'my_14': {
        'marginTop': '14px',
        'marginBottom': '14px',
    },
    'ma_14': {
        'margin': '14px',
    },
    'px_14': {
        'paddingLeft': '14px',
        'paddingRight': '14px',
    },
    'py_14': {
        'paddingTop': '14px',
        'paddingBottom': '14px',
    },
    'pa_14': {
        'padding': '14px',
    },
    'mt_15': {
        'marginTop': '15px',
    },
    'pt_15': {
        'paddingTop': '15px',
    },
    'mb_15': {
        'marginBottom': '15px',
    },
    'pb_15': {
        'paddingBottom': '15px',
    },
    'ml_15': {
        'marginLeft': '15px',
    },
    'pl_15': {
        'paddingLeft': '15px',
    },
    'mr_15': {
        'marginRight': '15px',
    },
    'pr_15': {
        'paddingRight': '15px',
    },
    'w_15': {
        'width': '15%',
    },
    'h_15': {
        'height': '15%',
    },
    'mx_15': {
        'marginLeft': '15px',
        'marginRight': '15px',
    },
    'my_15': {
        'marginTop': '15px',
        'marginBottom': '15px',
    },
    'ma_15': {
        'margin': '15px',
    },
    'px_15': {
        'paddingLeft': '15px',
        'paddingRight': '15px',
    },
    'py_15': {
        'paddingTop': '15px',
        'paddingBottom': '15px',
    },
    'pa_15': {
        'padding': '15px',
    },
    'mt_16': {
        'marginTop': '16px',
    },
    'pt_16': {
        'paddingTop': '16px',
    },
    'mb_16': {
        'marginBottom': '16px',
    },
    'pb_16': {
        'paddingBottom': '16px',
    },
    'ml_16': {
        'marginLeft': '16px',
    },
    'pl_16': {
        'paddingLeft': '16px',
    },
    'mr_16': {
        'marginRight': '16px',
    },
    'pr_16': {
        'paddingRight': '16px',
    },
    'w_16': {
        'width': '16%',
    },
    'h_16': {
        'height': '16%',
    },
    'mx_16': {
        'marginLeft': '16px',
        'marginRight': '16px',
    },
    'my_16': {
        'marginTop': '16px',
        'marginBottom': '16px',
    },
    'ma_16': {
        'margin': '16px',
    },
    'px_16': {
        'paddingLeft': '16px',
        'paddingRight': '16px',
    },
    'py_16': {
        'paddingTop': '16px',
        'paddingBottom': '16px',
    },
    'pa_16': {
        'padding': '16px',
    },
    'mt_20': {
        'marginTop': '20px',
    },
    'pt_20': {
        'paddingTop': '20px',
    },
    'mb_20': {
        'marginBottom': '20px',
    },
    'pb_20': {
        'paddingBottom': '20px',
    },
    'ml_20': {
        'marginLeft': '20px',
    },
    'pl_20': {
        'paddingLeft': '20px',
    },
    'mr_20': {
        'marginRight': '20px',
    },
    'pr_20': {
        'paddingRight': '20px',
    },
    'w_20': {
        'width': '20%',
    },
    'h_20': {
        'height': '20%',
    },
    'mx_20': {
        'marginLeft': '20px',
        'marginRight': '20px',
    },
    'my_20': {
        'marginTop': '20px',
        'marginBottom': '20px',
    },
    'ma_20': {
        'margin': '20px',
    },
    'px_20': {
        'paddingLeft': '20px',
        'paddingRight': '20px',
    },
    'py_20': {
        'paddingTop': '20px',
        'paddingBottom': '20px',
    },
    'pa_20': {
        'padding': '20px',
    },
    'mt_25': {
        'marginTop': '25px',
    },
    'pt_25': {
        'paddingTop': '25px',
    },
    'mb_25': {
        'marginBottom': '25px',
    },
    'pb_25': {
        'paddingBottom': '25px',
    },
    'ml_25': {
        'marginLeft': '25px',
    },
    'pl_25': {
        'paddingLeft': '25px',
    },
    'mr_25': {
        'marginRight': '25px',
    },
    'pr_25': {
        'paddingRight': '25px',
    },
    'w_25': {
        'width': '25%',
    },
    'h_25': {
        'height': '25%',
    },
    'mx_25': {
        'marginLeft': '25px',
        'marginRight': '25px',
    },
    'my_25': {
        'marginTop': '25px',
        'marginBottom': '25px',
    },
    'ma_25': {
        'margin': '25px',
    },
    'px_25': {
        'paddingLeft': '25px',
        'paddingRight': '25px',
    },
    'py_25': {
        'paddingTop': '25px',
        'paddingBottom': '25px',
    },
    'pa_25': {
        'padding': '25px',
    },
    'mt_30': {
        'marginTop': '30px',
    },
    'pt_30': {
        'paddingTop': '30px',
    },
    'mb_30': {
        'marginBottom': '30px',
    },
    'pb_30': {
        'paddingBottom': '30px',
    },
    'ml_30': {
        'marginLeft': '30px',
    },
    'pl_30': {
        'paddingLeft': '30px',
    },
    'mr_30': {
        'marginRight': '30px',
    },
    'pr_30': {
        'paddingRight': '30px',
    },
    'w_30': {
        'width': '30%',
    },
    'h_30': {
        'height': '30%',
    },
    'mx_30': {
        'marginLeft': '30px',
        'marginRight': '30px',
    },
    'my_30': {
        'marginTop': '30px',
        'marginBottom': '30px',
    },
    'ma_30': {
        'margin': '30px',
    },
    'px_30': {
        'paddingLeft': '30px',
        'paddingRight': '30px',
    },
    'py_30': {
        'paddingTop': '30px',
        'paddingBottom': '30px',
    },
    'pa_30': {
        'padding': '30px',
    },
    'mt_35': {
        'marginTop': '35px',
    },
    'pt_35': {
        'paddingTop': '35px',
    },
    'mb_35': {
        'marginBottom': '35px',
    },
    'pb_35': {
        'paddingBottom': '35px',
    },
    'ml_35': {
        'marginLeft': '35px',
    },
    'pl_35': {
        'paddingLeft': '35px',
    },
    'mr_35': {
        'marginRight': '35px',
    },
    'pr_35': {
        'paddingRight': '35px',
    },
    'w_35': {
        'width': '35%',
    },
    'h_35': {
        'height': '35%',
    },
    'mx_35': {
        'marginLeft': '35px',
        'marginRight': '35px',
    },
    'my_35': {
        'marginTop': '35px',
        'marginBottom': '35px',
    },
    'ma_35': {
        'margin': '35px',
    },
    'px_35': {
        'paddingLeft': '35px',
        'paddingRight': '35px',
    },
    'py_35': {
        'paddingTop': '35px',
        'paddingBottom': '35px',
    },
    'pa_35': {
        'padding': '35px',
    },
    'mt_40': {
        'marginTop': '40px',
    },
    'pt_40': {
        'paddingTop': '40px',
    },
    'mb_40': {
        'marginBottom': '40px',
    },
    'pb_40': {
        'paddingBottom': '40px',
    },
    'ml_40': {
        'marginLeft': '40px',
    },
    'pl_40': {
        'paddingLeft': '40px',
    },
    'mr_40': {
        'marginRight': '40px',
    },
    'pr_40': {
        'paddingRight': '40px',
    },
    'w_40': {
        'width': '40%',
    },
    'h_40': {
        'height': '40%',
    },
    'mx_40': {
        'marginLeft': '40px',
        'marginRight': '40px',
    },
    'my_40': {
        'marginTop': '40px',
        'marginBottom': '40px',
    },
    'ma_40': {
        'margin': '40px',
    },
    'px_40': {
        'paddingLeft': '40px',
        'paddingRight': '40px',
    },
    'py_40': {
        'paddingTop': '40px',
        'paddingBottom': '40px',
    },
    'pa_40': {
        'padding': '40px',
    },
    'mt_45': {
        'marginTop': '45px',
    },
    'pt_45': {
        'paddingTop': '45px',
    },
    'mb_45': {
        'marginBottom': '45px',
    },
    'pb_45': {
        'paddingBottom': '45px',
    },
    'ml_45': {
        'marginLeft': '45px',
    },
    'pl_45': {
        'paddingLeft': '45px',
    },
    'mr_45': {
        'marginRight': '45px',
    },
    'pr_45': {
        'paddingRight': '45px',
    },
    'w_45': {
        'width': '45%',
    },
    'h_45': {
        'height': '45%',
    },
    'mx_45': {
        'marginLeft': '45px',
        'marginRight': '45px',
    },
    'my_45': {
        'marginTop': '45px',
        'marginBottom': '45px',
    },
    'ma_45': {
        'margin': '45px',
    },
    'px_45': {
        'paddingLeft': '45px',
        'paddingRight': '45px',
    },
    'py_45': {
        'paddingTop': '45px',
        'paddingBottom': '45px',
    },
    'pa_45': {
        'padding': '45px',
    },
    'mt_50': {
        'marginTop': '50px',
    },
    'pt_50': {
        'paddingTop': '50px',
    },
    'mb_50': {
        'marginBottom': '50px',
    },
    'pb_50': {
        'paddingBottom': '50px',
    },
    'ml_50': {
        'marginLeft': '50px',
    },
    'pl_50': {
        'paddingLeft': '50px',
    },
    'mr_50': {
        'marginRight': '50px',
    },
    'pr_50': {
        'paddingRight': '50px',
    },
    'w_50': {
        'width': '50%',
    },
    'h_50': {
        'height': '50%',
    },
    'mx_50': {
        'marginLeft': '50px',
        'marginRight': '50px',
    },
    'my_50': {
        'marginTop': '50px',
        'marginBottom': '50px',
    },
    'ma_50': {
        'margin': '50px',
    },
    'px_50': {
        'paddingLeft': '50px',
        'paddingRight': '50px',
    },
    'py_50': {
        'paddingTop': '50px',
        'paddingBottom': '50px',
    },
    'pa_50': {
        'padding': '50px',
    },
    'mt_75': {
        'marginTop': '75px',
    },
    'pt_75': {
        'paddingTop': '75px',
    },
    'mb_75': {
        'marginBottom': '75px',
    },
    'pb_75': {
        'paddingBottom': '75px',
    },
    'ml_75': {
        'marginLeft': '75px',
    },
    'pl_75': {
        'paddingLeft': '75px',
    },
    'mr_75': {
        'marginRight': '75px',
    },
    'pr_75': {
        'paddingRight': '75px',
    },
    'w_75': {
        'width': '75%',
    },
    'h_75': {
        'height': '75%',
    },
    'mx_75': {
        'marginLeft': '75px',
        'marginRight': '75px',
    },
    'my_75': {
        'marginTop': '75px',
        'marginBottom': '75px',
    },
    'ma_75': {
        'margin': '75px',
    },
    'px_75': {
        'paddingLeft': '75px',
        'paddingRight': '75px',
    },
    'py_75': {
        'paddingTop': '75px',
        'paddingBottom': '75px',
    },
    'pa_75': {
        'padding': '75px',
    },
    'mt_100': {
        'marginTop': '100px',
    },
    'pt_100': {
        'paddingTop': '100px',
    },
    'mb_100': {
        'marginBottom': '100px',
    },
    'pb_100': {
        'paddingBottom': '100px',
    },
    'ml_100': {
        'marginLeft': '100px',
    },
    'pl_100': {
        'paddingLeft': '100px',
    },
    'mr_100': {
        'marginRight': '100px',
    },
    'pr_100': {
        'paddingRight': '100px',
    },
    'w_100': {
        'width': '100%',
    },
    'h_100': {
        'height': '100%',
    },
    'mx_100': {
        'marginLeft': '100px',
        'marginRight': '100px',
    },
    'my_100': {
        'marginTop': '100px',
        'marginBottom': '100px',
    },
    'ma_100': {
        'margin': '100px',
    },
    'px_100': {
        'paddingLeft': '100px',
        'paddingRight': '100px',
    },
    'py_100': {
        'paddingTop': '100px',
        'paddingBottom': '100px',
    },
    'pa_100': {
        'padding': '100px',
    },
    'mt_auto': {
        'marginTop': 'auto',
    },
    'mb_auto': {
        'marginBottom': 'auto',
    },
    'ml_auto': {
        'marginLeft': 'auto',
    },
    'mr_auto': {
        'marginRight': 'auto',
    },
    'w_auto': {
        'width': 'auto',
    },
    'h_auto': {
        'height': 'auto',
    },
    'mx_auto': {
        'marginLeft': 'auto',
        'marginRight': 'auto',
    },
    'my_auto': {
        'marginTop': 'auto',
        'marginBottom': 'auto',
    },
    'ma_auto': {
        'margin': 'auto',
    },
    'text_center': {
        'textAlign': 'center',
    },
    'text_start': {
        'textAlign': 'left',
    },
    'text_end': {
        'textAlign': 'right',
    },
    'text_capitalize': {
        'textTransform': 'capitalize',
    },
    'text_uppercase': {
        'textTransform': 'uppercase',
    },
    'text_justify': {
        'textAlign': 'justify',
    },
    'font_weight_bold': {
        'fontWeight': 'bold',
    },
    'font_weight_light': {
        'fontWeight': '200',
    },
    'font_weight_medium': {
        'fontWeight': 'normal',
    },
    'h6': {
//         'color': 'var(--heading-color)',
        'fontSize': '0.4em',
    },
    'h5': {
//         'color': 'var(--heading-color)',
        'fontSize': '0.8em',
    },
    'h4': {
//         'color': 'var(--heading-color)',
        'fontSize': '1.2em',
    },
    'h3': {
//         'color': 'var(--heading-color)',
        'fontSize': '1.6em',
    },
    'h2': {
//         'color': 'var(--heading-color)',
        'fontSize': '2em',
    },
    'h1': {
//         'color': 'var(--heading-color)',
        'fontSize': '2.4em',
    },
    'caption': {
        'fontSize': '14px',
    },
    'app_title': {
//         'color': 'var(--primary-color)',
    },
    'nav_app_header': {
        'height': '60px',
        'minHeight': '60px',
        'lineHeight': '60px',
//         'backgroundColor': 'var(--toolbar-backgroundColor-color)',
        borderBottomWidth: '1px',
        borderBottomStyle: 'solid',
//         borderBottomColor: 'var(--toolbar-border-color)',
        'zIndex': '900',
        'width': '100%',
        'boxSizing': 'border-box',
//         'boxShadow': '0 3px 10px 0 var(--toolbar-box-shadow-color)',
        'padding': '0 1em',
    },
    'nav_app_header_fixed': {
        'position': 'fixed',
        'top': '0',
    },
    'nav_app_header_a': {
        'color': 'white',
        'fontSize': '0.9em',
    },
    'nav_app_header__logo': {
        'height': '44px',
//         'color': 'var(--primary-color)',
        'fontSize': '1.2em',
    },
    'input': {
        'boxShadow': 'inset 0 1px 4px rgba(0, 0, 0, 0.1), 0 0 0 transparent',
        'border': '0',
        'borderRadius': '0',
        'backgroundColor': '#f3f7f7',
        'color': '#0e141e',
        'height': '36px',
        'fontSize': '14px',
        'padding': '0 12px',
        borderBottomWidth: '2px',
        borderBottomStyle: 'solid',
        borderBottomColor: 'transparent',
        'transition': 'border-bottom 0.1s ease-in-out',
    },
    'input_success': {
//         'borderColor': 'var(--success-color)',
    },
    'input_error': {
//         'borderColor': 'var(--error-color)',
    },
    'input_outlined': {
        'border': '2px solid #8b98af',
        'borderRadius': '2px',
    },
    'input_large': {
        'height': '40px',
        'fontSize': '16px',
    },
    'input_white': {
        'backgroundColor': 'white',
    },
    'input_focus': {
        borderBottomWidth: '2px',
        borderBottomStyle: 'solid',
        borderBottomColor: '#2e4163',
    },
    'input_type_radio': {
        'height': 'auto',
    },
    'input_type_checkbox': {
        'height': 'auto',
    },
    'select': {
        'height': '32px',
        'minWidth': '112px',
    },
    'select_focus': {
//         'borderColor': 'var(--primary-color)',
    },
    'form_hint': {
        'marginBottom': '8px',
        'lineHeight': '12px',
        'wordBreak': 'break-word',
        'overflowWrap': 'break-word',
        'wordWrap': 'break-word',
        'WebkitHyphens': 'auto',
        'MsHyphens': 'auto',
        'hyphens': 'auto',
        'fontSize': '12px',
        'color': 'rgba(0, 0, 0, 0.6)',
        'marginLeft': '4px',
    },
    'success_text': {
        'WebkitAnimationDelay': '0',
        'WebkitAnimationDuration': '0.2s',
        'WebkitAnimationName': 'slide-up-fade-in',
        'WebkitAnimationFillMode': 'fowards',
        'WebkitAnimationDirection': 'cubic-bezier(0.35, 0, 0.25, 1)',
        'MozAnimationDelay': '0',
        'MozAnimationDuration': '0.2s',
        'MozAnimationName': 'slide-up-fade-in',
        'MozAnimationFillMode': 'fowards',
        'MozAnimationDirection': 'cubic-bezier(0.35, 0, 0.25, 1)',
        'animationDelay': '0',
        'animationDuration': '0.2s',
        animationKeyframes: 'slide-up-fade-in',
        'animationFillMode': 'fowards',
        'animationDirection': 'cubic-bezier(0.35, 0, 0.25, 1)',
    },
    'error_text': {
        'WebkitAnimationDelay': '0',
        'WebkitAnimationDuration': '0.2s',
        'WebkitAnimationName': 'slide-up-fade-in',
        'WebkitAnimationFillMode': 'fowards',
        'WebkitAnimationDirection': 'cubic-bezier(0.35, 0, 0.25, 1)',
        'MozAnimationDelay': '0',
        'MozAnimationDuration': '0.2s',
        'MozAnimationName': 'slide-up-fade-in',
        'MozAnimationFillMode': 'fowards',
        'MozAnimationDirection': 'cubic-bezier(0.35, 0, 0.25, 1)',
        'animationDelay': '0',
        'animationDuration': '0.2s',
        animationKeyframes: 'slide-up-fade-in',
        'animationFillMode': 'fowards',
        'animationDirection': 'cubic-bezier(0.35, 0, 0.25, 1)',
    },
    'button': {
        'color': '#fff',
        'backgroundColor': colors.brandColor,
        'boxShadow': '0 4px 12px var(--brand-box-shadow)',
        width: '72px',
        textAlign: 'center',
        borderRadius: '2px',
        padding: '12px',
        marginHorizontal: 8
    },
    'a_button': {
        'padding': '0 1.528em',
        'minHeight': '44px',
        'flexDirection': 'row',
        'alignItems': 'center',
        'justifyContent': 'center',
        'border': 'none',
        'margin': '8px 12px',
        'transition': 'box-shadow 0.1s ease',
        'cursor': 'pointer',
        'fontSize': '1em',
        'fontWeight': '700',
//         'fontFamily': 'var(--font-family-sans-serif)',
        'WebkitBorderRadius': '2px',
        'MozBorderRadius': '2px',
        'borderRadius': '2px',
    },
    'button_active': {
        'position': 'relative',
        'top': '1px',
    },
    'a_button_active': {
        'position': 'relative',
        'top': '1px',
    },
    'button_outlined': {
        'backgroundColor': 'transparent',
//         'color': 'var(--brand-color)',
//         'border': '1px solid var(--brand-color)',
        'boxShadow': 'none',
    },
    'a_button_outlined': {
        'boxShadow': 'none',
    },
    'button_text': {
//         'color': 'var(--brand-color)',
        'backgroundColor': 'transparent',
        'boxShadow': 'none',
    },
    'a_button_text': {
        'backgroundColor': 'transparent',
        'border': 'none',
        'boxShadow': 'none',
        'margin': '8px 0',
    },
    'button_icon_only': {
        'width': '36px',
        'height': '36px',
        'minHeight': '36px',
        'padding': '0',
        'margin': '8px 12px',
        'backgroundColor': 'transparent',
        'boxShadow': 'none',
        'borderRadius': '100%',
    },
    'a_button_icon_only': {
        'width': '36px',
        'height': '36px',
        'minHeight': '36px',
        'padding': '0',
        'margin': '8px 12px',
        'backgroundColor': 'transparent',
        'boxShadow': 'none',
        'borderRadius': '100%',
    },
    'button_icon_only_disabled': {
        'backgroundColor': 'transparent',
    },
    'a_button_icon_only_disabled': {
        'backgroundColor': 'transparent',
    },
    'button_icon_only_i': {
//         'color': 'var(--brand-color)',
    },
    'a_button_icon_only_i': {
        'fontSize': '24px',
        'width': '24px',
        'height': '24px',
    },
    'button_small': {
        'fontSize': '0.75em',
        padding: '10',
    },
    'a_button_small': {
        'fontSize': '0.75em',
    },
    'button_small_icon_only': {
        'width': '32px',
        'minHeight': '32px',
        'height': '32px',
    },
    'a_button_small_icon_only': {
        'width': '32px',
        'minHeight': '32px',
        'height': '32px',
    },
    'button_small_icon_only_i': {
        'fontSize': '20px',
        'width': '20px',
        'height': '20px',
    },
    'a_button_small_icon_only_i': {
        'fontSize': '20px',
        'width': '20px',
        'height': '20px',
    },
    'button_x_small': {
        'fontSize': '0.7em',
    },
    'a_button_x_small': {
        'fontSize': '0.7em',
    },
    'button_x_small_icon_only': {
        'width': '24px',
        'minHeight': '24px',
        'height': '24px',
    },
    'a_button_x_small_icon_only': {
        'width': '24px',
        'minHeight': '24px',
        'height': '24px',
    },
    'button_x_small_icon_only_i': {
        'fontSize': '16px',
        'width': '16px',
        'height': '16px',
    },
    'a_button_x_small_icon_only_i': {
        'fontSize': '16px',
        'width': '16px',
        'height': '16px',
    },
    'button_large': {
        'minHeight': '52px',
    },
    'a_button_large': {
        'minHeight': '52px',
    },
    'button_large_icon_only': {
        'width': '44px',
        'minHeight': '44px',
        'height': '44px',
    },
    'a_button_large_icon_only': {
        'width': '44px',
        'minHeight': '44px',
        'height': '44px',
    },
    'button_large_icon_only_i': {
        'fontSize': '36px',
        'width': '36px',
        'height': '36px',
    },
    'a_button_large_icon_only_i': {
        'fontSize': '36px',
        'width': '36px',
        'height': '36px',
    },
    'button_disabled': {
        'backgroundColor': colors.brandDisabled,
        'boxShadow': 'none',
    },
    'a_button_disabled': {
        'cursor': 'not-allowed',
        'WebkitBoxShadow': 'none',
        'MozBoxShadow': 'none',
        'boxShadow': 'none',
        'border': 'none',
//         'color': 'var(--disabled-text-color)',
    },
    'button_disabled_active': {
        'position': 'relative',
        'top': '0',
    },
    'a_button_disabled_active': {
        'position': 'relative',
        'top': '0',
    },
    'button_hover': {
//         'boxShadow': '0 3px 6px var(--brand-box-shadow-hover)',
    },
    'button_flat': {
        'boxShadow': 'none',
    },
    'button_tile': {
        'borderRadius': '0',
    },
    'button_icon_only_hover': {
        'boxShadow': 'none',
        'backgroundColor': 'transparent',
    },
    'button_disabled_i': {
//         'color': 'var(--disabled-text-color)',
    },
    'button_danger': {
        'color': '#ffffff',
//         'backgroundColor': 'var(--error-color)',
//         'boxShadow': '0 4px 12px var(--error-box-shadow)',
    },
    'button_danger_hover': {
//         'boxShadow': '0 3px 6px var(--error-box-shadow-hover)',
    },
    'button_danger_outlined': {
        'backgroundColor': 'transparent',
//         'color': 'var(--error-color)',
//         'border': '1px solid var(--error-color)',
        'boxShadow': 'none',
    },
    'button_danger_text': {
//         'color': 'var(--error-color)',
        'backgroundColor': 'transparent',
        'boxShadow': 'none',
    },
    'button_danger_flat': {
        'boxShadow': 'none',
    },
    'button_danger_tile': {
        'borderRadius': '0',
    },
    'button_danger_icon_only_i': {
//         'color': 'var(--error-color)',
    },
    'button_danger_icon_only_hover': {
        'boxShadow': 'none',
        'backgroundColor': 'transparent',
    },
    'button_danger_disabled': {
//         'backgroundColor': 'var(--error-disabled)',
        'boxShadow': 'none',
    },
    'button_danger_disabled_i': {
//         'color': 'var(--disabled-text-color)',
    },
    'button_secondary': {
        'color': '#fff',
//         'backgroundColor': 'var(--secondary-color)',
//         'boxShadow': '0 4px 12px var(--secondary-box-shadow)',
    },
    'button_secondary_hover': {
//         'boxShadow': '0 3px 6px var(--secondary-box-shadow-hover)',
    },
    'button_secondary_outlined': {
        'backgroundColor': 'transparent',
//         'color': 'var(--secondary-color)',
//         'border': '1px solid var(--secondary-color)',
        'boxShadow': 'none',
    },
    'button_secondary_text': {
//         'color': 'var(--secondary-color)',
        'backgroundColor': 'transparent',
        'boxShadow': 'none',
    },
    'button_secondary_flat': {
        'boxShadow': 'none',
    },
    'button_secondary_tile': {
        'borderRadius': '0',
    },
    'button_secondary_icon_only_i': {
//         'color': 'var(--secondary-color)',
    },
    'button_secondary_icon_only_hover': {
        'boxShadow': 'none',
        'backgroundColor': 'transparent',
    },
    'button_secondary_disabled': {
//         'backgroundColor': 'var(--secondary-disabled)',
        'boxShadow': 'none',
    },
    'button_secondary_disabled_i': {
//         'color': 'var(--disabled-text-color)',
    },
    'a': {
//         'color': 'var(--link-color)',
        textDecorationLine: 'none',
        'transition': 'color 0.3s ease-in-out',
    },
    'a_hover': {
        textDecorationLine: 'underline',
//         'color': 'var(--link-color-hover)',
    },
    'card': {
        'backgroundColor': '#fff',
        'boxShadow': '0 3px 10px 0 var(--card-shadow-color)',
        'transition': 'box-shadow 0.25s cubic-bezier(0.32, 0.01, 0, 1)',
//         'margin': 'var(--card-margin-gutter)',
        'boxSizing': 'border-box',
        'WebkitBoxOrient': 'vertical',
        'flexDirection': 'column',
    },
    'card_hoverable_hover': {
//         'boxShadow': '0 16px 32px var(--card-hover-shadow-color)',
    },
    'card_flat': {
        'boxShadow': 'none',
        'backgroundColor': 'white',
    },
    'card_outlined': {
        'backgroundColor': 'white',
//         'border': 'thin solid rgba(var(--primary-rgb), 0.1)',
        'boxShadow': 'none',
    },
    'card__card_text': {
        'padding': '1em',
    },
    'card__card_actions': {
        'padding': '1em 0.8em',
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'center',
    },
    'slide_up_fade_in': {
        'WebkitAnimationDelay': '0',
        'WebkitAnimationDuration': '0.2s',
        'WebkitAnimationName': 'slide-up-fade-in',
        'WebkitAnimationFillMode': 'fowards',
        'WebkitAnimationDirection': 'cubic-bezier(0.35, 0, 0.25, 1)',
        'MozAnimationDelay': '0',
        'MozAnimationDuration': '0.2s',
        'MozAnimationName': 'slide-up-fade-in',
        'MozAnimationFillMode': 'fowards',
        'MozAnimationDirection': 'cubic-bezier(0.35, 0, 0.25, 1)',
        'animationDelay': '0',
        'animationDuration': '0.2s',
        'animationKeyframes': 'slide-up-fade-in',
        'animationFillMode': 'fowards',
        'animationDirection': 'cubic-bezier(0.35, 0, 0.25, 1)',
    },
    'ul': {
        'margin': '0 0 0 24px',
    },
    'ol': {
        'margin': '0 0 0 24px',
    },
    'ul_li': {
        'paddingTop': '6px',
    },
    'ol_li': {
        'paddingTop': '6px',
    },
    'ul_styled': {
        'listStyleType': 'none',
    },
    'ol_styled': {
        'margin': '0',
    },
    'ul_styled_li': {
        'backgroundColor': 'white',
        'minWidth': '200px',
        'padding': '8px 12px 8px 24px',
        'margin': '16px 0',
        'boxShadow': '0 4px 12px #eaeaea',
    },
    'ol_styled_li': {
        'backgroundColor': 'white',
        'minWidth': '200px',
        'padding': '8px 12px 8px 24px',
        'margin': '16px 0',
        'boxShadow': '0 4px 12px #eaeaea',
    },
    'ul_bordered_li': {
        borderBottomWidth: '1px',
        borderBottomStyle: 'solid',
        borderBottomColor: '#eeeeee',
    },
    'ol_bordered_li': {
        borderBottomWidth: '1px',
        borderBottomStyle: 'solid',
        borderBottomColor: '#eeeeee',
    },
    'ul_bordered_li_last_child': {
        'borderBottomStyle': 'none',
    },
    'ol_bordered_li_last_child': {
        'borderBottomStyle': 'none',
    },
    'ul_inset_li': {
        'paddingLeft': '16px',
        'paddingRight': '16px',
    },
    'ol_inset_li': {
        'paddingLeft': '16px',
        'paddingRight': '16px',
    },
    'table': {
        'width': '100%',
        'maxWidth': '100%',
        'marginBottom': '2rem',
        'borderCollapse': 'collapse',
        'paddingBottom': '2em',
        paddingLeft : '1em'
    },
    'table_thead_tr': {
        'webkitTransition': 'all 0.3s ease',
        'OTransition': 'all 0.3s ease',
        'transition': 'all 0.3s ease',
    },
    'table_thead_tr_th': {
        'color': '#738f93',
        'letterSpacing': '1.4px',
        'fontSize': '14px',
        borderBottomWidth: '1px',
        borderBottomStyle: 'solid',
        borderBottomColor: 'rgba(0, 0, 0, 0.12)',
        'height': '48px',
        'padding': '0 1.6em',
        'fontWeight': '400',
        lineHeight: 48,
    },
    'table_thead_tr_th_first_child': {
        'paddingLeft': '30px',
    },
    'table_thead_tr_th_last_child': {
        'paddingRight': '30px',
    },
    'table_thead_tr_th_sortable': {
        'cursor': 'pointer',
    },
    'table_thead_tr_th_sortable_hover': {
//         'color': 'var(--secondary-color)',
    },
    'table_th': {
        'textAlign': 'left',
        borderTopWidth: 0,
        'WebkitTransition': 'all 0.3s ease',
        'OTransition': 'all 0.3s ease',
        'transition': 'all 0.3s ease',
        flex: 1,
        alignSelf: 'stretch',
    },
    'table_td': {
        'textAlign': 'left',
        borderTopWidth: 0,
        'WebkitTransition': 'all 0.3s ease',
        'OTransition': 'all 0.3s ease',
        'transition': 'all 0.3s ease',
        flex: 1,
        alignSelf: 'stretch',
        flexDirection: 'row'
    },
    'table_th_numeric': {
        'textAlign': 'right',
    },
    'table_td_numeric': {
        'textAlign': 'right',
    },
    'table_tbody_tr': {
        'padding': '0 30px',
        flex: 1,
        alignSelf: 'stretch',
        flexDirection: 'row',
    },
    'table_tbody_tr_td': {
        'fontSize': '0.8em',
        borderBottomWidth: '0.5px',
        borderBottomStyle: 'solid',
        borderBottomColor: 'rgba(0, 0, 0, 0.12)',
        'height': '48px',
        flex: 1,
        alignSelf: 'stretch',
        lineHeight: 48
    },
    'table_tbody_tr_td_first_child': {
        'paddingLeft': '30px',
    },
    'table_tbody_tr_td_last_child': {
        'paddingRight': '30px',
    },
    'table_tbody_tr_hover': {
        'backgroundColor': '#eeeeee',
    },
    'table_tbody_tr_last_child': {
        'marginBottom': '30px',
    },
    'alert': {
        'padding': '8px 16px 8px 44px',
        'fontSize': '16px',
        'borderRadius': '4px',
        'borderWidth': '1px',
        'borderStyle': 'solid',
        'marginBottom': '12px',
        'position': 'relative',
//         'borderColor': '1px solid var(--primary-color)',
//         'color': 'var(--primary-color)',
//         'backgroundColor': 'rgba(var(--primary-rgb), 0.1)',
    },
    'alert_before': {
        'position': 'absolute',
        'left': '16px',
        'fontSize': '18px',
        'bottom': '4px',
    },
    'alert_filled': {
//         'backgroundColor': 'var(--primary-color)',
        'color': '#ffffff',
    },
    'alert_info': {
//         'borderColor': '1px solid var(--secondary-color)',
//         'color': 'var(--secondary-color)',
//         'backgroundColor': 'rgba(var(--secondary-rgb), 0.1)',
    },
    'alert_info_before': {
        'position': 'absolute',
        'left': '16px',
        'fontSize': '18px',
        'bottom': '4px',
    },
    'alert_info_filled': {
//         'backgroundColor': 'var(--secondary-color)',
        'color': '#ffffff',
    },
    'alert_success': {
//         'borderColor': '1px solid var(--success-color)',
//         'color': 'var(--success-color)',
//         'backgroundColor': 'rgba(var(--success-rgb), 0.1)',
    },
    'alert_success_before': {
        'position': 'absolute',
        'left': '16px',
        'fontSize': '18px',
        'bottom': '4px',
    },
    'alert_success_filled': {
//         'backgroundColor': 'var(--success-color)',
        'color': '#ffffff',
    },
    'alert_error': {
//         'borderColor': '1px solid var(--error-color)',
//         'color': 'var(--error-color)',
//         'backgroundColor': 'rgba(var(--error-rgb), 0.1)',
    },
    'alert_error_before': {
        'position': 'absolute',
        'left': '16px',
        'fontSize': '18px',
        'bottom': '4px',
        'content': '"⚠"',
    },
    'alert_error_filled': {
//         'backgroundColor': 'var(--error-color)',
        'color': '#ffffff',
    },
});
