import React from "react";
import { RichText } from "prismic-reactjs";
import { trekWithStyles } from "styles";
import Image from "next/image";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

/**
 * Founder Slice Components
 */
const IHTrekWithSwathi = () => {
  const trekWithSwathiLogoImg =
    "/7eb9101e-699c-4309-b5fc-f9c8af1d8fa5_TWS_clearBG@2x.png";

  const logoImg = {
    backgroundImage: `url('${trekWithSwathiLogoImg}')`,
    width: "100%",
    backgroundRepeat: "no-repeat",
  };

  return (
    <>
      <div>
        <div className="container">
          <div style={logoImg} className="trek_with_logo"></div>
        </div>
        <div className="trek_with_swathi_bg p-4">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <p className="sign_up_text mb-0">
                  Sign up for our much loved Weekly Mailer
                </p>
                <p className="sign_up_text_desc">
                  We have terrific trekking tips, trek updates and trek talks to
                  look forward to
                </p>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="pt-4 pb-2">
                  <script
                    data-cfasync="false"
                    src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"
                  ></script>
                  <script
                    src="https://dh315.infusionsoft.app/app/webTracking/getTrackingCode?b=1.70.0.176669-hf-201912181335"
                    type="text/javascript"
                  ></script>

                  <script
                    dangerouslySetInnerHTML={{
                      __html: `
    function submitWebForm() {
    var form = document.forms[0];
    var resolution = document.createElement('input');
    resolution.setAttribute('id', 'screenResolution');
    resolution.setAttribute('type', 'hidden');
    resolution.setAttribute('name', 'screenResolution');
    var resolutionString = screen.width + 'x' + screen.height;
    resolution.setAttribute('value', resolutionString);
    form.appendChild(resolution);
    var pluginString = '';
    if (window.ActiveXObject) {
    var activeXNames = {'AcroPDF.PDF':'Adobe Reader',
    'ShockwaveFlash.ShockwaveFlash':'Flash',
    'QuickTime.QuickTime':'Quick Time',
    'SWCtl':'Shockwave',
    'WMPLayer.OCX':'Windows Media Player',
    'AgControl.AgControl':'Silverlight'};
    var plugin = null;
    for (var activeKey in activeXNames) {
    try {
    plugin = null;
    plugin = new ActiveXObject(activeKey);
    } catch (e) {
    // do nothing, the plugin is not installed
    }
    pluginString += activeXNames[activeKey] + ',';
    }
    var realPlayerNames = ['rmockx.RealPlayer G2 Control',
    'rmocx.RealPlayer G2 Control.1',
    'RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)',
    'RealVideo.RealVideo(tm) ActiveX Control (32-bit)',
    'RealPlayer'];
    for (var index = 0; index < realPlayerNames.length; index++) {
    try {
    plugin = new ActiveXObject(realPlayerNames[index]);
    } catch (e) {
    continue;
    }
    if (plugin) {
    break;
    }
    }
    if (plugin) {
    pluginString += 'RealPlayer,';
    }
    } else {
    for (var i = 0; i < navigator.plugins.length; i++) {
    pluginString += navigator.plugins[i].name + ',';
    }
    }
    pluginString = pluginString.substring(0, pluginString.lastIndexOf(','));
    var plugins = document.createElement('input');
    plugins.setAttribute('id', 'pluginList');
    plugins.setAttribute('type', 'hidden');
    plugins.setAttribute('name', 'pluginList');
    plugins.setAttribute('value', pluginString);
    form.appendChild(plugins);
    var java = navigator.javaEnabled();
    var javaEnabled = document.createElement('input');
    javaEnabled.setAttribute('id', 'javaEnabled');
    javaEnabled.setAttribute('type', 'hidden');
    javaEnabled.setAttribute('name', 'javaEnabled');
    javaEnabled.setAttribute('value', java);
    form.appendChild(javaEnabled);
    }
   `,
                    }}
                  />

                  <div
                    className="text"
                    id="webformErrors"
                    name="errorContent"
                  ></div>
                  <form
                    acceptCharset="UTF-8"
                    action="https://dh315.infusionsoft.com/app/form/process/84a7deb63b24bef4c47dc0c2fd697605"
                    className="infusion-form"
                    id="inf_form_84a7deb63b24bef4c47dc0c2fd697605"
                    method="POST"
                    name="Web Form submitted"
                    onsubmit="submitWebForm()"
                  >
                    <input
                      name="inf_form_xid"
                      type="hidden"
                      value="84a7deb63b24bef4c47dc0c2fd697605"
                    />
                    <input
                      name="inf_form_name"
                      type="hidden"
                      value="Web Form submitted"
                    />
                    <input
                      name="infusionsoft_version"
                      type="hidden"
                      value="1.70.0.176669"
                    />
                    <div className="form-group-wrap">
                      <input
                        className="infusion-field-input form-control"
                        id="inf_field_FirstName"
                        name="inf_field_FirstName"
                        placeholder="First Name *"
                        type="text"
                      />
                    </div>
                    <div className="form-group-wrap">
                      <input
                        className="infusion-field-input form-control"
                        id="inf_field_LastName"
                        name="inf_field_LastName"
                        placeholder="Last Name *"
                        type="text"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        className="infusion-field-input form-control"
                        id="inf_field_Email"
                        name="inf_field_Email"
                        placeholder="Email *"
                        type="text"
                      />
                    </div>
                    <div className="form-group-wrap text-center">
                      <Button
                        type="submit"
                        value="Stay updated"
                        className="btn btn-lg btn-ih-primary hvr-grow"
                      >
                        Subscribe
                      </Button>
                    </div>
                  </form>
                  <script
                    async
                    defer
                    type="text/javascript"
                    src="https://dh315.infusionsoft.app/app/webTracking/getTrackingCode"
                  ></script>
                </div>
              </div>
            </div>
          </div>
        </div>
        <style jsx global>
          {trekWithStyles}
        </style>
      </div>
    </>
  );
};

export default IHTrekWithSwathi;
