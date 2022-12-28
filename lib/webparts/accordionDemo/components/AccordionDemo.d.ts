import * as React from 'react';
import { IAccordionDemoProps, IAccordionDemoState } from './IAccordionDemo.types';
export default class AccordionDemo extends React.Component<IAccordionDemoProps, IAccordionDemoState> {
    /**
     * Note: I assume you're populating the list of FAQ items later, but for this sample I'm loading
     * them in the constructor
     */
    constructor(props: IAccordionDemoProps);
    render(): React.ReactElement<IAccordionDemoProps>;
    private _onRenderCell;
    /**
     * Handles changes to the selected category
     * Omitted for this example
     */
    private _onChange;
    /**
     * Handles changes for filters
     * Omitted for this example
     */
    private _onFilterChanged;
}
//# sourceMappingURL=AccordionDemo.d.ts.map