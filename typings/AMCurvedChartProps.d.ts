/**
 * This file was generated from AMCurvedChart.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { EditableValue } from "mendix";

export interface AMCurvedChartContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    chartId: string;
    ChartValue: EditableValue<string>;
    width: number;
    height: number;
}

export interface AMCurvedChartPreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    chartId: string;
    ChartValue: string;
    width: number | null;
    height: number | null;
}
