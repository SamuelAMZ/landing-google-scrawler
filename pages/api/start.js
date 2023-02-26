// this file manage sending of new content review request
const axios = require("axios");
const Joi = require("@hapi/joi");

export default async function handler(req, res) {
  // restrict this route to only POST requests
  if (req.method !== "POST") {
    res.status(405).send({ message: "Only POST requests allowed" });
    return;
  }

  // sending email
  const { data } = req.body;

  //   validate
  const schema = Joi.object({
    data: Joi.object().required(),
  });

  try {
    const validation = await schema.validateAsync({
      data,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
    return;
  }

  let platforms = "";
  for (const key in data.platformData) {
    if (data.platformData[key]) {
      platforms += `${key},`;
    }
  }

  // message to send
  let messageToSend = `<!DOCTYPE html>
  <html
    xmlns:v="urn:schemas-microsoft-com:vml"
    xmlns:o="urn:schemas-microsoft-com:office:office"
    lang="en"
  >
    <head>
      <title></title>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <!--[if mso
        ]><xml
          ><o:OfficeDocumentSettings
            ><o:PixelsPerInch>96</o:PixelsPerInch
            ><o:AllowPNG /></o:OfficeDocumentSettings></xml
      ><![endif]-->
      <!--[if !mso]><!-->
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap"
        rel="stylesheet"
        type="text/css"
      />
      <!--<![endif]-->
      <style>
        * {
          box-sizing: border-box;
        }
  
        body {
          margin: 0;
          padding: 0;
        }
  
        a[x-apple-data-detectors] {
          color: inherit !important;
          text-decoration: inherit !important;
        }
  
        #MessageViewBody a {
          color: inherit;
          text-decoration: none;
        }
  
        p {
          line-height: inherit;
        }
  
        .desktop_hide,
        .desktop_hide table {
          mso-hide: all;
          display: none;
          max-height: 0px;
          overflow: hidden;
        }
  
        @media (max-width: 620px) {
          .desktop_hide table.icons-inner {
            display: inline-block !important;
          }
  
          .icons-inner {
            text-align: center;
          }
  
          .icons-inner td {
            margin: 0 auto;
          }
  
          .image_block img.big,
          .row-content {
            width: 100% !important;
          }
  
          .mobile_hide {
            display: none;
          }
  
          .stack .column {
            width: 100%;
            display: block;
          }
  
          .mobile_hide {
            min-height: 0;
            max-height: 0;
            max-width: 0;
            overflow: hidden;
            font-size: 0px;
          }
  
          .desktop_hide,
          .desktop_hide table {
            display: table !important;
            max-height: none !important;
          }
  
          .row-4 .column-1 .block-3.text_block td.pad {
            padding: 10px !important;
          }
  
          .row-4 .column-1 .block-2.paragraph_block td.pad > div {
            font-size: 14px !important;
          }
  
          .row-4 .column-1 .block-2.paragraph_block td.pad {
            padding: 10px 20px 0 !important;
          }
        }
      </style>
    </head>
  
    <body
      style="
        background-color: #ededed;
        margin: 0;
        padding: 0;
        -webkit-text-size-adjust: none;
        text-size-adjust: none;
      "
    >
      <table
        class="nl-container"
        width="100%"
        border="0"
        cellpadding="0"
        cellspacing="0"
        role="presentation"
        style="
          mso-table-lspace: 0pt;
          mso-table-rspace: 0pt;
          background-color: #ededed;
        "
      >
        <tbody>
          <tr>
            <td>
              <table
                class="row row-1"
                align="center"
                width="100%"
                border="0"
                cellpadding="0"
                cellspacing="0"
                role="presentation"
                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
              >
                <tbody>
                  <tr>
                    <td>
                      <table
                        class="row-content stack"
                        align="center"
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        role="presentation"
                        style="
                          mso-table-lspace: 0pt;
                          mso-table-rspace: 0pt;
                          color: #000000;
                          border-radius: 0;
                          width: 600px;
                        "
                        width="600"
                      >
                        <tbody>
                          <tr>
                            <td
                              class="column column-1"
                              width="100%"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                font-weight: 400;
                                text-align: left;
                                vertical-align: top;
                                padding-top: 30px;
                                padding-bottom: 5px;
                                border-top: 0px;
                                border-right: 0px;
                                border-bottom: 0px;
                                border-left: 0px;
                              "
                            >
                              <table
                                class="empty_block block-1"
                                width="100%"
                                border="0"
                                cellpadding="0"
                                cellspacing="0"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                "
                              >
                                <tr>
                                  <td class="pad">
                                    <div></div>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                class="row row-2"
                align="center"
                width="100%"
                border="0"
                cellpadding="0"
                cellspacing="0"
                role="presentation"
                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
              >
                <tbody>
                  <tr>
                    <td>
                      <table
                        class="row-content stack"
                        align="center"
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        role="presentation"
                        style="
                          mso-table-lspace: 0pt;
                          mso-table-rspace: 0pt;
                          color: #000000;
                          width: 600px;
                        "
                        width="600"
                      >
                        <tbody>
                          <tr>
                            <td
                              class="column column-1"
                              width="100%"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                font-weight: 400;
                                text-align: left;
                                vertical-align: top;
                                padding-top: 5px;
                                padding-bottom: 0px;
                                border-top: 0px;
                                border-right: 0px;
                                border-bottom: 0px;
                                border-left: 0px;
                              "
                            >
                              <table
                                class="image_block block-1"
                                width="100%"
                                border="0"
                                cellpadding="0"
                                cellspacing="0"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                "
                              >
                                <tr>
                                  <td
                                    class="pad"
                                    style="
                                      width: 100%;
                                      padding-right: 0px;
                                      padding-left: 0px;
                                    "
                                  >
                                    <div
                                      class="alignment"
                                      align="center"
                                      style="line-height: 10px"
                                    >
                                      <img
                                        class="big"
                                        src="https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/BeeProAgency/939676_924125/unnamed%20%282%29.png"
                                        style="
                                          display: block;
                                          height: auto;
                                          border: 0;
                                          width: 600px;
                                          max-width: 100%;
                                        "
                                        width="600"
                                      />
                                    </div>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                class="row row-3"
                align="center"
                width="100%"
                border="0"
                cellpadding="0"
                cellspacing="0"
                role="presentation"
                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
              >
                <tbody>
                  <tr>
                    <td>
                      <table
                        class="row-content stack"
                        align="center"
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        role="presentation"
                        style="
                          mso-table-lspace: 0pt;
                          mso-table-rspace: 0pt;
                          background-color: #ffffff;
                          color: #000000;
                          width: 600px;
                        "
                        width="600"
                      >
                        <tbody>
                          <tr>
                            <td
                              class="column column-1"
                              width="100%"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                font-weight: 400;
                                text-align: left;
                                vertical-align: top;
                                padding-top: 5px;
                                padding-bottom: 5px;
                                border-top: 0px;
                                border-right: 0px;
                                border-bottom: 0px;
                                border-left: 0px;
                              "
                            >
                              <table
                                class="image_block block-1"
                                width="100%"
                                border="0"
                                cellpadding="0"
                                cellspacing="0"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                "
                              >
                                <tr>
                                  <td
                                    class="pad"
                                    style="
                                      width: 100%;
                                      padding-right: 0px;
                                      padding-left: 0px;
                                    "
                                  >
                                    <div
                                      class="alignment"
                                      align="center"
                                      style="line-height: 10px"
                                    >
                                      <img
                                        src="https://takedownly.com/static/img/logo.png"
                                        style="
                                          display: block;
                                          height: auto;
                                          border: 0;
                                          width: 180px;
                                          max-width: 100%;
                                        "
                                        width="180"
                                        alt="Image"
                                        title="Image"
                                      />
                                    </div>
                                  </td>
                                </tr>
                              </table>
                              <table
                                class="text_block block-2"
                                width="100%"
                                border="0"
                                cellpadding="10"
                                cellspacing="0"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  word-break: break-word;
                                "
                              >
                                <tr>
                                  <td class="pad">
                                    <div style="font-family: sans-serif">
                                      <div
                                        class
                                        style="
                                          font-size: 12px;
                                          mso-line-height-alt: 18px;
                                          color: #555555;
                                          line-height: 1.5;
                                          font-family: Poppins, sans-serif;
                                        "
                                      >
                                        <p
                                          style="
                                            margin: 0;
                                            font-size: 14px;
                                            text-align: center;
                                            mso-line-height-alt: 18px;
                                          "
                                        >
                                          <span style="font-size: 12px"
                                            >Get rid of leaked content.</span
                                          >
                                        </p>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                class="row row-4"
                align="center"
                width="100%"
                border="0"
                cellpadding="0"
                cellspacing="0"
                role="presentation"
                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
              >
                <tbody>
                  <tr>
                    <td>
                      <table
                        class="row-content stack"
                        align="center"
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        role="presentation"
                        style="
                          mso-table-lspace: 0pt;
                          mso-table-rspace: 0pt;
                          background-color: #ffffff;
                          color: #000000;
                          width: 600px;
                        "
                        width="600"
                      >
                        <tbody>
                          <tr>
                            <td
                              class="column column-1"
                              width="100%"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                font-weight: 400;
                                text-align: left;
                                vertical-align: top;
                                padding-top: 0px;
                                padding-bottom: 5px;
                                border-top: 0px;
                                border-right: 0px;
                                border-bottom: 0px;
                                border-left: 0px;
                              "
                            >
                              <table
                                class="text_block block-1"
                                width="100%"
                                border="0"
                                cellpadding="10"
                                cellspacing="0"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  word-break: break-word;
                                "
                              >
                                <tr>
                                  <td class="pad">
                                    <div style="font-family: sans-serif">
                                      <div
                                        class
                                        style="
                                          font-size: 12px;
                                          mso-line-height-alt: 14.399999999999999px;
                                          color: #0d0d0d;
                                          line-height: 1.2;
                                          font-family: Poppins, sans-serif;
                                        "
                                      >
                                        <p
                                          style="
                                            margin: 0;
                                            font-size: 14px;
                                            text-align: center;
                                            mso-line-height-alt: 16.8px;
                                          "
                                        >
                                          <span style="font-size: 20px"
                                            ><strong
                                              ><span style
                                                >New content review request</span
                                              ></strong
                                            ></span
                                          >
                                        </p>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              </table>
  
                              <!-- here -->
  
                              <table
                                class="text_block block-3"
                                width="100%"
                                border="0"
                                cellpadding="0"
                                cellspacing="0"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  word-break: break-word;
                                "
                              >
                                <tr>
                                  <td
                                    class="pad"
                                    style="
                                      padding-bottom: 50px;
                                      padding-left: 60px;
                                      padding-right: 10px;
                                      padding-top: 10px;
                                    "
                                  >
                                    <div
                                      style="
                                      font-family: Poppins, sans-serif;
                                      "
                                    >
                                      <div
                                        class
                                        style="
                                          font-size: 12px;
                                          font-family: Poppins, sans-serif;
                                          mso-line-height-alt: 18px;
                                          color: #0d0d0d;
                                          line-height: 1.5;
                                        "
                                      >
                                        <ul
                                          style="
                                            list-style-type: circle;
                                            line-height: 1.5;
                                            mso-line-height-alt: 18px;
                                            font-size: 16px;
                                            line-height: 2;
                                          "
                                        >
                                          <li style="text-align: left">
                                            <span style="font-size: 14px"
                                              ><u>Platforms</u>:
                                              ${platforms}</span
                                            >
                                          </li>
                                          <li style="text-align: left">
                                            <span style="font-size: 14px"
                                              ><u>UserName:</u>:
                                              ${data.stepData.username}
                                            </span>
                                          </li>
                                          <li style="text-align: left">
                                            <span style="font-size: 14px"
                                              ><u>Email:</u>:
                                              <a
                                                href="mailto:${data.stepData.email}"
                                                >${data.stepData.email}</a
                                              >
                                            </span>
                                          </li>
                                          <li style="text-align: left">
                                            <span style="font-size: 14px"
                                              ><u>FirstName:</u>:
                                              ${data.contactData.firstname}</span
                                            >
                                          </li>
                                          <li style="text-align: left">
                                            <span style="font-size: 14px"
                                              ><u>LastName:</u>:
                                              ${data.contactData.lastname}</span
                                            >
                                          </li>
                                          <li style="text-align: left">
                                            <span style="font-size: 14px"
                                              ><u>LinkTree:</u>:
                                              <a
                                                href="${data.contactData.linktree}"
                                                >${data.contactData.linktree}</a
                                              ></span
                                            >
                                          </li>
                                          <li style="text-align: left">
                                            <span style="font-size: 14px"
                                              ><u>Message:</u>:
                                              ${data.contactData.message}</span
                                            >
                                          </li>
                                          <li style="text-align: left">
                                            <span style="font-size: 14px"
                                              ><u>Date of submission:</u>:
                                              ${data.date}</span
                                            >
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                class="row row-5"
                align="center"
                width="100%"
                border="0"
                cellpadding="0"
                cellspacing="0"
                role="presentation"
                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
              >
                <tbody>
                  <tr>
                    <td>
                      <table
                        class="row-content stack"
                        align="center"
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        role="presentation"
                        style="
                          mso-table-lspace: 0pt;
                          mso-table-rspace: 0pt;
                          color: #000000;
                          width: 600px;
                        "
                        width="600"
                      >
                        <tbody>
                          <tr>
                            <td
                              class="column column-1"
                              width="100%"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                font-weight: 400;
                                text-align: left;
                                vertical-align: top;
                                padding-top: 0px;
                                padding-bottom: 5px;
                                border-top: 0px;
                                border-right: 0px;
                                border-bottom: 0px;
                                border-left: 0px;
                              "
                            >
                              <table
                                class="image_block block-1"
                                width="100%"
                                border="0"
                                cellpadding="0"
                                cellspacing="0"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                "
                              >
                                <tr>
                                  <td
                                    class="pad"
                                    style="
                                      width: 100%;
                                      padding-right: 0px;
                                      padding-left: 0px;
                                      padding-bottom: 60px;
                                    "
                                  >
                                    <div
                                      class="alignment"
                                      align="center"
                                      style="line-height: 10px"
                                    >
                                      <img
                                        class="big"
                                        src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/20/rounder-dwn.png"
                                        style="
                                          display: block;
                                          height: auto;
                                          border: 0;
                                          width: 600px;
                                          max-width: 100%;
                                        "
                                        width="600"
                                        alt="Image"
                                        title="Image"
                                      />
                                    </div>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                class="row row-6"
                align="center"
                width="100%"
                border="0"
                cellpadding="0"
                cellspacing="0"
                role="presentation"
                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
              >
                <tbody>
                  <tr>
                    <td>
                      <table
                        class="row-content stack"
                        align="center"
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        role="presentation"
                        style="
                          mso-table-lspace: 0pt;
                          mso-table-rspace: 0pt;
                          color: #000000;
                          width: 600px;
                        "
                        width="600"
                      >
                        <tbody>
                          <tr>
                            <td
                              class="column column-1"
                              width="100%"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                font-weight: 400;
                                text-align: left;
                                vertical-align: top;
                                padding-top: 5px;
                                padding-bottom: 5px;
                                border-top: 0px;
                                border-right: 0px;
                                border-bottom: 0px;
                                border-left: 0px;
                              "
                            >
                              <table
                                class="icons_block block-1"
                                width="100%"
                                border="0"
                                cellpadding="0"
                                cellspacing="0"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                "
                              >
                                <tr>
                                  <td
                                    class="pad"
                                    style="
                                      vertical-align: middle;
                                      color: #9d9d9d;
                                      font-family: inherit;
                                      font-size: 15px;
                                      padding-bottom: 5px;
                                      padding-top: 5px;
                                      text-align: center;
                                    "
                                  >
                                    <table
                                      width="100%"
                                      cellpadding="0"
                                      cellspacing="0"
                                      role="presentation"
                                      style="
                                        mso-table-lspace: 0pt;
                                        mso-table-rspace: 0pt;
                                      "
                                    >
                                      <tr>
                                        <td
                                          class="alignment"
                                          style="
                                            vertical-align: middle;
                                            text-align: center;
                                          "
                                        ></td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
      <!-- End -->
    </body>
  </html>
  `;

  // send email
  let url = "https://api.sendgrid.com/v3/mail/send";
  let config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_SENDGRID_API_KEY}`,
    },
  };

  axios
    .post(
      url,
      {
        personalizations: [
          {
            to: [{ email: "joe@takedownly.com", name: "Takedownly" }],
            subject: "Takedownly new content review request",
          },
        ],
        content: [{ type: "text/html", value: messageToSend }],
        from: { email: "no-reply@takedownly.com", name: "no-reply" },
        reply_to: {
          email: "no-reply@takedownly.com",
          name: "Takedownly",
        },
      },
      config
    )
    .then(function (response) {
      return res.status(200).json({ message: "success", code: "ok" });
    })
    .catch(function (error) {
      console.log(error);
      console.log(error.message);
      return res.status(400).json({ message: "error", code: "bad" });
    });
}
