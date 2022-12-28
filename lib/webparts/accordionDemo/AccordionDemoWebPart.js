var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import * as strings from 'AccordionDemoWebPartStrings';
import AccordionDemo from './components/AccordionDemo';
import { PropertyFieldListPicker, PropertyFieldListPickerOrderBy } from '@pnp/spfx-property-controls/lib/PropertyFieldListPicker';
var AccordionDemoWebPart = /** @class */ (function (_super) {
    __extends(AccordionDemoWebPart, _super);
    function AccordionDemoWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AccordionDemoWebPart.prototype.render = function () {
        var _this = this;
        var element = React.createElement(AccordionDemo, {
            faqList: this.properties.list,
            title: this.properties.title,
            displayMode: this.displayMode,
            updateProperty: function (value) {
                _this.properties.title = value;
            }
        });
        ReactDom.render(element, this.domElement);
    };
    AccordionDemoWebPart.prototype.onDispose = function () {
        ReactDom.unmountComponentAtNode(this.domElement);
    };
    Object.defineProperty(AccordionDemoWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    AccordionDemoWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: strings.PropertyPaneDescription
                    },
                    groups: [
                        {
                            groupName: strings.BasicGroupName,
                            groupFields: [
                                PropertyFieldListPicker('list', {
                                    label: 'Sélectionnez une liste',
                                    selectedList: this.properties.list,
                                    includeHidden: false,
                                    orderBy: PropertyFieldListPickerOrderBy.Title,
                                    disabled: false,
                                    onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                                    properties: this.properties,
                                    context: this.context,
                                    onGetErrorMessage: null,
                                    deferredValidationTime: 0,
                                    key: 'listPickerFieldId'
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return AccordionDemoWebPart;
}(BaseClientSideWebPart));
export default AccordionDemoWebPart;
//# sourceMappingURL=AccordionDemoWebPart.js.map