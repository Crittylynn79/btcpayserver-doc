(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{698:function(e,t,a){"use strict";a.r(t);var s=a(10),n=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"greenfield-api-development-documentation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#greenfield-api-development-documentation"}},[e._v("#")]),e._v(" GreenField API Development Documentation")]),e._v(" "),t("h2",{attrs:{id:"adding-new-api-endpoints"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#adding-new-api-endpoints"}},[e._v("#")]),e._v(" Adding new API endpoints")]),e._v(" "),t("ul",[t("li",[e._v("Always document all endpoints and model schemas in swagger. OpenAPI 3.0 is used as a specification, in JSON formatting, and is written manually. The specification is split to a file per controller and then merged by the server through a controller action at  "),t("code",[e._v("/swagger/v1/swagger.json")]),e._v(".")]),e._v(" "),t("li",[e._v("All "),t("code",[e._v("JsonConverter")]),e._v(" usage should be registered through attributes within the model itself.")]),e._v(" "),t("li",[t("code",[e._v("decimal")]),e._v(" and "),t("code",[e._v("long")]),e._v(" and other similar types, if there is a need for decimal precision or has the possibility of an overflow issue, should be serialized to a string and able to deserialize from the original type and a string.")]),e._v(" "),t("li",[e._v("Ensure that the correct security permissions are set on the endpoint. Create a new permission if none of the existing ones are suitable.")]),e._v(" "),t("li",[e._v("Use HTTP methods according to REST principles when possible. This means:\n"),t("ul",[t("li",[t("code",[e._v("POST")]),e._v(" - Create or custom action")]),e._v(" "),t("li",[t("code",[e._v("PUT")]),e._v(" - Update full model")]),e._v(" "),t("li",[t("code",[e._v("PATCH")]),e._v(" - Update partially")]),e._v(" "),t("li",[t("code",[e._v("DELETE")]),e._v(" - Delete or Archive")])])]),e._v(" "),t("li",[e._v("When returning an error response, we should differentiate from 2 possible scenarios:\n"),t("ul",[t("li",[e._v("Model validation - an error or errors on the request was found - "),t("a",{attrs:{href:"https://httpstatuses.com/422",target:"_blank",rel:"noopener noreferrer"}},[e._v("Status Code 422"),t("OutboundLink")],1),e._v(" with the model:"),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"path"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"prop-name"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"message"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"human readable message"')]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n")])])])]),e._v(" "),t("li",[e._v("Generic request error - an error resulting from the business logic unable to handle the specified request - "),t("a",{attrs:{href:"https://httpstatuses.com/400",target:"_blank",rel:"noopener noreferrer"}},[e._v("Status Code 400"),t("OutboundLink")],1),e._v(" with the model:"),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"code"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"unique-error-code"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"message"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"a human readable message"')]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])])])])])]),e._v(" "),t("h2",{attrs:{id:"updating-existing-api-endpoints"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#updating-existing-api-endpoints"}},[e._v("#")]),e._v(" Updating existing API endpoints")]),e._v(" "),t("h3",{attrs:{id:"scenario-1-changing-a-property-type-on-the-model"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#scenario-1-changing-a-property-type-on-the-model"}},[e._v("#")]),e._v(" Scenario 1: Changing a property type on the model")]),e._v(" "),t("p",[e._v("Changing a property on a model is a breaking change unless the server starts handling both versions.")]),e._v(" "),t("h4",{attrs:{id:"solutions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#solutions"}},[e._v("#")]),e._v(" Solutions")]),e._v(" "),t("ul",[t("li",[e._v("Bump the version of the endpoint.")])]),e._v(" "),t("h4",{attrs:{id:"alternatives-considered"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#alternatives-considered"}},[e._v("#")]),e._v(" Alternatives considered")]),e._v(" "),t("ul",[t("li",[e._v("Create a "),t("code",[e._v("JsonConverter")]),e._v(" that allows conversion between the original type and the new type. However, if this option is used, you will need to ensure that the response model returns the same format. In the case of the "),t("code",[e._v("GET")]),e._v(" endpoint, you will break clients expecting the original type.")])]),e._v(" "),t("h3",{attrs:{id:"scenario-2-removing-a-property-on-the-model"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#scenario-2-removing-a-property-on-the-model"}},[e._v("#")]),e._v(" Scenario 2: Removing a property on the model")]),e._v(" "),t("p",[e._v("Removing a property on a model is a breaking change.")]),e._v(" "),t("h4",{attrs:{id:"solutions-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#solutions-2"}},[e._v("#")]),e._v(" Solutions")]),e._v(" "),t("ul",[t("li",[e._v("Bump the version of the endpoint.")])]),e._v(" "),t("h4",{attrs:{id:"alternatives-considered-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#alternatives-considered-2"}},[e._v("#")]),e._v(" Alternatives considered")]),e._v(" "),t("ul",[t("li",[e._v("Create a default value (one that is not useful) to be sent back in the model.  Ignore the property being sent on the model to the server.")])]),e._v(" "),t("h3",{attrs:{id:"scenario-3-adding-a-property-on-the-model"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#scenario-3-adding-a-property-on-the-model"}},[e._v("#")]),e._v(" Scenario 3: Adding a property on the model")]),e._v(" "),t("p",[e._v("Adding a property on a model can potentially be a breaking change. It is a breaking change if:")]),e._v(" "),t("ul",[t("li",[e._v("the property is required.")]),e._v(" "),t("li",[e._v("the property has no default value.")])]),e._v(" "),t("h4",{attrs:{id:"solutions-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#solutions-3"}},[e._v("#")]),e._v(" Solutions")]),e._v(" "),t("ul",[t("li",[e._v("Check if the payload has the property present. If not, either set to the default value (in the case of a"),t("code",[e._v("POST")]),e._v(") or set to the model's current value. See "),t("a",{attrs:{href:"#missing-properties-detect"}},[e._v("Detecting missing properties in a JSON model")]),e._v(" for how to achieve this.")])]),e._v(" "),t("h4",{attrs:{id:"alternatives-considered-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#alternatives-considered-3"}},[e._v("#")]),e._v(" Alternatives considered")]),e._v(" "),t("ul",[t("li",[e._v("Bump the version of the endpoint.")]),e._v(" "),t("li",[e._v("Assume the property is always sent and let the value be set to the default if not ( in the case of nullable types, this may be problematic when calling update endpoints).")]),e._v(" "),t("li",[e._v("Use "),t("a",{attrs:{href:"https://www.newtonsoft.com/json/help/html/T_Newtonsoft_Json_JsonExtensionDataAttribute.htm",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("[JsonExtensionData]AdditionalData")]),t("OutboundLink")],1),e._v(" so that clients receive the full payload even after updating only the server. This is problematic as it only fixes clients which implement this opinionated flow (this is not a standard or common way of doing API calls) .")])]),e._v(" "),t("h2",{attrs:{id:"technical-specifics"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#technical-specifics"}},[e._v("#")]),e._v(" Technical specifics")]),e._v(" "),t("h3",{attrs:{id:"detecting-missing-properties-in-a-json-model"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#detecting-missing-properties-in-a-json-model"}},[e._v("#")]),e._v(" "),t("a",{attrs:{name:"missing-properties-detect"}}),e._v("Detecting missing properties in a JSON model.")]),e._v(" "),t("p",[e._v("Possible solutions:")]),e._v(" "),t("ul",[t("li",[e._v("Read the raw JSON object in the controller action and and search for the lack of a specific property.")]),e._v(" "),t("li",[e._v("Use "),t("a",{attrs:{href:"https://www.newtonsoft.com/json/help/html/SerializationCallbacks.htm",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("JSON.NET Serialization Callabacks")]),t("OutboundLink")],1),e._v(" to set a "),t("code",[e._v("List<string> MissingProperties;")]),e._v(" variable.")])])])}),[],!1,null,null,null);t.default=n.exports}}]);