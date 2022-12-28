import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, IPropertyPaneConfiguration } from '@microsoft/sp-webpart-base';
export interface IAccordionDemoWebPartProps {
    list: string;
    title: string;
}
export default class AccordionDemoWebPart extends BaseClientSideWebPart<IAccordionDemoWebPartProps> {
    render(): void;
    protected onDispose(): void;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=AccordionDemoWebPart.d.ts.map