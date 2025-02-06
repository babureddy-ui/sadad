import axios from "axios";

function getRequestParams(formData) {
  const API_KEY = process.env.MAILCHIMP_API_KEY;
  const LIST_ID = process.env.MAILCHIMP_LIST_ID;
  const DATACENTER = API_KEY.split("-")[1];

  const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`;

  const data = {
    email_address: formData.email,
    status: "subscribed",
    merge_fields: {
      FNAME: formData.firstName || "",
      LNAME: formData.lastName || "",
      PHONE: formData.phoneNumber || "",
      MMERGE5: formData.businessName || "",
      MMERGE3: formData.businessType || "",
      MMERGE8: formData.state || "",
      MMERGE6: formData.city || "",
    },
  };

  const base64ApiKey = Buffer.from(`anystring:${API_KEY}`).toString("base64");
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Basic ${base64ApiKey}`,
  };

  return { url, data, headers };
}

export default async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { firstName, lastName, phoneNumber, email, businessName, businessType, state, city } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  try {
    const { url, data, headers } = getRequestParams(req.body);
    await axios.post(url, data, { headers });

    return res.status(201).json({ message: "Successfully subscribed" });
  } catch (error) {
    console.error("Mailchimp API Error:", error.response?.data || error.message);
    return res.status(400).json({ error: error.response?.data?.detail || "Oops, something went wrong. Try again later." });
  }
};
