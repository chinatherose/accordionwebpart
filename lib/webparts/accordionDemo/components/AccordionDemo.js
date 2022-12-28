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
import styles from './AccordionDemo.module.scss';
import { FocusZone, FocusZoneDirection } from 'office-ui-fabric-react/lib/FocusZone';
import { Accordion } from '../../../controls/accordion';
import { WebPartTitle } from "@pnp/spfx-controls-react/lib/WebPartTitle";
var sampleItems = [
    {
        Langue: { Nom: 'Français' },
        Question: 'Charger des fichiers et dossiers',
        Reponse: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        Langue: { Nom: 'Français' },
        Question: 'Enregistrer un fichier',
        Reponse: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        Langue: { Nom: 'Français' },
        Question: 'Troisième exemple',
        Reponse: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        Langue: { Nom: 'Français' },
        Question: 'Quatrième exemple',
        Reponse: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        Langue: { Nom: 'Français' },
        Question: 'Cinquième exemple',
        Reponse: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        Langue: { Nom: 'Français' },
        Question: 'Sixième exemple',
        Reponse: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
];
var AccordionDemo = /** @class */ (function (_super) {
    __extends(AccordionDemo, _super);
    /**
     * Note: I assume you're populating the list of FAQ items later, but for this sample I'm loading
     * them in the constructor
     */
    function AccordionDemo(props) {
        var _this = _super.call(this, props) || this;
        /**
         * Handles changes to the selected category
         * Omitted for this example
         */
        _this._onChange = function (_event, item) {
            _this.setState({ selectedItem: item });
        };
        /**
         * Handles changes for filters
         * Omitted for this example
         */
        _this._onFilterChanged = function (ev, newValue) {
            // Assume you're filtering events
            //this.setState({ filter: newValue || '' });
        };
        _this.state = {
            collapsed: true,
            items: sampleItems,
            originalItems: sampleItems,
            selectedItem: '',
            categorieOption: [
                { key: 'cat1', text: 'Categorie 1' },
                { key: 'cat2', text: 'Categorie 2' },
                { key: 'cat3', text: 'Categorie 3' },
            ]
        };
        return _this;
    }
    AccordionDemo.prototype.render = function () {
        var _this = this;
        var _a = this.state, items = _a.items, originalItems = _a.originalItems;
        var resultCountText = items.length === originalItems.length ? '' : " (" + items.length + " of " + originalItems.length + " shown)";
        var selectedItem = this.state.selectedItem;
        return (React.createElement("div", { className: styles.accordionDemo },
            React.createElement(WebPartTitle, { displayMode: this.props.displayMode, title: this.props.title, updateProperty: this.props.updateProperty }),
            React.createElement(FocusZone, { direction: FocusZoneDirection.vertical }, items.map(function (item, index) {
                return _this._onRenderCell(item, index);
            }))));
    };
    AccordionDemo.prototype._onRenderCell = function (item, index) {
        var collapsed = this.state.collapsed;
        return (React.createElement(Accordion, { title: item.Question, defaultCollapsed: collapsed, className: styles.itemCell, key: index },
            React.createElement("div", { className: styles.itemContent },
                React.createElement("div", { className: styles.itemReponse }, item.Reponse),
                React.createElement("div", { className: styles.itemIndex }, "Langue :  " + item.Langue.Nom))));
    };
    return AccordionDemo;
}(React.Component));
export default AccordionDemo;
//# sourceMappingURL=AccordionDemo.js.map