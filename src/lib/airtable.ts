const AIRTABLE_TOKEN = import.meta.env.VITE_AIRTABLE_TOKEN;
const AIRTABLE_BASE_ID = import.meta.env.VITE_AIRTABLE_BASE_ID;
const AIRTABLE_TABLE_NAME = import.meta.env.VITE_AIRTABLE_TABLE_NAME;

interface BookingFields {
  nombre: string;
  telefono: string;
  fecha_preferida: string;
  area_cuerpo: string;
  descripcion: string;
  tamano: string;
}

export async function submitBooking(fields: BookingFields): Promise<void> {
  const url = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(AIRTABLE_TABLE_NAME)}`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${AIRTABLE_TOKEN}`,
      'Content-Type': 'application/json',
    },
 body: JSON.stringify({
      fields: fields, // Send the object directly
    }),
    }),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`Airtable error ${response.status}: ${errorBody}`);
  }
}
