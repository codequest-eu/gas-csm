"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardService = void 0;
const DecoratedText_1 = require("./classes/DecoratedText");
const CardSection_1 = require("./classes/CardSection");
const Action_1 = require("./classes/Action");
const ActionResponseBuilder_1 = require("./classes/ActionResponseBuilder");
const AuthorizationAction_1 = require("./classes/AuthorizationAction");
const AuthorizationException_1 = require("./classes/AuthorizationException");
const ComposeActionResponseBuilder_1 = require("./classes/ComposeActionResponseBuilder");
const UpdateDraftActionResponseBuilder_1 = require("./classes/UpdateDraftActionResponseBuilder");
const UpdateDraftBodyAction_1 = require("./classes/UpdateDraftBodyAction");
const ButtonSet_1 = require("./classes/ButtonSet");
const CardAction_1 = require("./classes/CardAction");
const CardBuilder_1 = require("./classes/CardBuilder");
const CardHeader_1 = require("./classes/CardHeader");
const Image_1 = require("./classes/Image");
const ImageButton_1 = require("./classes/ImageButton");
const Navigation_1 = require("./classes/Navigation");
const Notification_1 = require("./classes/Notification");
const OpenLink_1 = require("./classes/OpenLink");
const SelectionInput_1 = require("./classes/SelectionInput");
const Suggestions_1 = require("./classes/Suggestions");
const TextButton_1 = require("./classes/TextButton");
const TextInput_1 = require("./classes/TextInput");
const TextParagraph_1 = require("./classes/TextParagraph");
const UniversalActionResponseBuilder_1 = require("./classes/UniversalActionResponseBuilder");
const ComposeEmailType_1 = require("./enums/ComposeEmailType");
const Icon_1 = require("./enums/Icon");
const ImageStyle_1 = require("./enums/ImageStyle");
const LoadIndicator_1 = require("./enums/LoadIndicator");
const NotificationType_1 = require("./enums/NotificationType");
const OnClose_1 = require("./enums/OnClose");
const OpenAs_1 = require("./enums/OpenAs");
const SelectionInputType_1 = require("./enums/SelectionInputType");
const TextButtonStyle_1 = require("./enums/TextButtonStyle");
const ContentType_1 = require("./enums/ContentType");
const UpdateDraftBodyType_1 = require("./enums/UpdateDraftBodyType");
const FixedFooter_1 = require("./classes/FixedFooter");
const DatePicker_1 = require("./classes/DatePicker");
const DateTimePicker_1 = require("./classes/DateTimePicker");
class CardService {
    static newAction() {
        return new Action_1.Action();
    }
    static newActionResponseBuilder() {
        return new ActionResponseBuilder_1.ActionResponseBuilder();
    }
    static newAuthorizationAction() {
        return new AuthorizationAction_1.AuthorizationAction();
    }
    static newAuthorizationException() {
        return new AuthorizationException_1.AuthorizationException();
    }
    static newComposeActionResponseBuilder() {
        return new ComposeActionResponseBuilder_1.ComposeActionResponseBuilder();
    }
    static newDecoratedText() {
        return new DecoratedText_1.DecoratedText();
    }
    static newUpdateDraftActionResponseBuilder() {
        return new UpdateDraftActionResponseBuilder_1.UpdateDraftActionResponseBuilder();
    }
    static newUpdateDraftBodyAction() {
        return new UpdateDraftBodyAction_1.UpdateDraftBodyAction();
    }
    static newButtonSet() {
        return new ButtonSet_1.ButtonSet();
    }
    static newCardAction() {
        return new CardAction_1.CardAction();
    }
    static newCardBuilder() {
        return new CardBuilder_1.CardBuilder();
    }
    static newCardHeader() {
        return new CardHeader_1.CardHeader();
    }
    static newCardSection() {
        return new CardSection_1.CardSection();
    }
    static newImage() {
        return new Image_1.Image();
    }
    static newImageButton() {
        return new ImageButton_1.ImageButton();
    }
    static newNavigation() {
        return new Navigation_1.Navigation();
    }
    static newNotification() {
        return new Notification_1.Notification();
    }
    static newOpenLink() {
        return new OpenLink_1.OpenLink();
    }
    static newSelectionInput() {
        return new SelectionInput_1.SelectionInput();
    }
    static newSuggestions() {
        return new Suggestions_1.Suggestions();
    }
    static newTextButton() {
        return new TextButton_1.TextButton();
    }
    static newTextInput() {
        return new TextInput_1.TextInput();
    }
    static newTextParagraph() {
        return new TextParagraph_1.TextParagraph();
    }
    static newUniversalActionResponseBuilder() {
        return new UniversalActionResponseBuilder_1.UniversalActionResponseBuilder();
    }
    static newDatePicker() {
        return new DatePicker_1.DatePicker();
    }
    static newDateTimePicker() {
        return new DateTimePicker_1.DateTimePicker();
    }
    static newFixedFooter() {
        return new FixedFooter_1.FixedFooter();
    }
    static get ComposeEmailType() {
        return ComposeEmailType_1.ComposeEmailType;
    }
    static get Icon() {
        return Icon_1.Icon;
    }
    static get ImageStyle() {
        return ImageStyle_1.ImageStyle;
    }
    static get LoadIndicator() {
        return LoadIndicator_1.LoadIndicator;
    }
    static get NotificationType() {
        return NotificationType_1.NotificationType;
    }
    static get OnClose() {
        return OnClose_1.OnClose;
    }
    static get OpenAs() {
        return OpenAs_1.OpenAs;
    }
    static get SelectionInputType() {
        return SelectionInputType_1.SelectionInputType;
    }
    static get TextButtonStyle() {
        return TextButtonStyle_1.TextButtonStyle;
    }
    static get ContentType() {
        return ContentType_1.ContentType;
    }
    static get UpdateDraftBodyType() {
        return UpdateDraftBodyType_1.UpdateDraftBodyType;
    }
}
exports.CardService = CardService;
