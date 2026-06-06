/**
 * Light-weight, zero-dependency custom CSV parser.
 * Handles standard CSV syntax, including quoted fields and double-quote escaping.
 *
 * @param {string} csvText - The raw CSV string.
 * @returns {string[][]} A 2D array of parsed rows and fields.
 */
export function parseCSV(csvText) {
  if (!csvText) return [];

  const lines = [];
  let currentRow = [];
  let currentField = '';
  let insideQuotes = false;

  for (let i = 0; i < csvText.length; i++) {
    const char = csvText[i];
    const nextChar = csvText[i + 1];

    if (char === '"') {
      if (insideQuotes && nextChar === '"') {
        // Escaped double quote ("") inside quotes becomes a single double quote
        currentField += '"';
        i++; // Skip the next quote
      } else {
        // Toggle quote state
        insideQuotes = !insideQuotes;
      }
    } else if (char === ',' && !insideQuotes) {
      currentRow.push(currentField.trim());
      currentField = '';
    } else if ((char === '\r' || char === '\n') && !insideQuotes) {
      if (char === '\r' && nextChar === '\n') {
        i++; // Skip LF in CRLF
      }
      currentRow.push(currentField.trim());
      if (currentRow.length > 0 && (currentRow.length > 1 || currentRow[0] !== '')) {
        lines.push(currentRow);
      }
      currentRow = [];
      currentField = '';
    } else {
      currentField += char;
    }
  }

  // Push the final field and row if any
  if (currentRow.length > 0 || currentField !== '') {
    currentRow.push(currentField.trim());
    if (currentRow.length > 0 && (currentRow.length > 1 || currentRow[0] !== '')) {
      lines.push(currentRow);
    }
  }

  return lines;
}

/**
 * Converts CSV text into an array of objects mapped dynamically based on the first header row.
 *
 * @param {string} csvText - The raw CSV string.
 * @returns {Array<Object>} Array of objects with keys from the CSV header.
 */
export function csvToObjects(csvText) {
  const rows = parseCSV(csvText);
  if (rows.length < 2) return [];

  // Standardize headers (trimmed, lowercase)
  const headers = rows[0].map(h => h.toLowerCase().trim());
  const objects = [];

  for (let i = 1; i < rows.length; i++) {
    const row = rows[i];
    const obj = {};
    headers.forEach((header, index) => {
      if (header) {
        obj[header] = row[index] !== undefined ? row[index] : '';
      }
    });
    objects.push(obj);
  }

  return objects;
}

/**
 * Fetches Google Sheet CSV data and maps it to the expected upcomingEvents structure.
 * Fallbacks to local data upon any network failure, bad formatting, or CORS issues.
 *
 * @param {string} url - The published Google Sheet CSV URL.
 * @param {Array<Object>} fallbackData - Static fallback content.
 * @returns {Promise<Array<Object>>} Resolves to the parsed events or fallback data.
 */
export async function fetchEventsCMS(url, fallbackData) {
  if (!url) {
    return fallbackData;
  }

  try {
    // Add a reasonable fetch timeout of 5 seconds
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);

    const response = await fetch(url, { signal: controller.signal });
    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const csvText = await response.text();
    const parsedData = csvToObjects(csvText);

    if (!parsedData || parsedData.length === 0) {
      throw new Error("No data parsed from CSV");
    }

    // Validate and transform fields to ensure structure matches { month, day, title, description }
    const validatedEvents = parsedData
      .filter(item => item.title && (item.month || item.day)) // minimal validation
      .map(item => ({
        month: (item.month || '').toUpperCase(),
        day: item.day || '',
        title: item.title,
        description: item.description || ''
      }));

    if (validatedEvents.length === 0) {
      throw new Error("No events found matching structural requirements");
    }

    return validatedEvents;
  } catch (error) {
    console.warn("CMS Fetch failed, falling back to static local data:", error.message);
    return fallbackData;
  }
}

/**
 * Fetches Google Sheet CSV data for the full Events page, supporting both English and Tamil schemas.
 *
 * @param {string} url - The published Google Sheet CSV URL.
 * @param {Array<Object>} fallbackData - Static fallback content.
 * @returns {Promise<Array<Object>>} Resolves to the parsed, schema-compliant events array.
 */
export async function fetchFullEventsCMS(url, fallbackData) {
  if (!url) {
    return fallbackData;
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);

    const response = await fetch(url, { signal: controller.signal });
    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const csvText = await response.text();
    const parsedData = csvToObjects(csvText);

    if (!parsedData || parsedData.length === 0) {
      throw new Error("No data parsed from CSV");
    }

    // Map rows to match full event structure
    const mappedEvents = parsedData
      .filter(item => item.title) // Title is required
      .map(item => ({
        date: {
          month: item.month || '', // Preserve case to support Tamil/English month names
          day: item.day || ''
        },
        title: item.title,
        time: item.time || '',
        location: item.location || '',
        description: item.description || '',
        featured: item.featured ? item.featured.toUpperCase() === 'TRUE' : false
      }));

    if (mappedEvents.length === 0) {
      throw new Error("No events found matching structural requirements");
    }

    return mappedEvents;
  } catch (error) {
    console.warn("Full CMS Fetch failed, falling back to static local data:", error.message);
    return fallbackData;
  }
}

/**
 * Fetches Google Sheet CSV data for the Photo Gallery.
 * Fallbacks to local data upon any failure.
 *
 * @param {string} url - The published Google Sheet CSV URL for the gallery.
 * @param {Array<Object>} fallbackData - Static fallback gallery images.
 * @returns {Promise<Array<Object>>} Resolves to the parsed gallery items.
 */
export async function fetchGalleryCMS(url, fallbackData) {
  if (!url) {
    return fallbackData;
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);

    const response = await fetch(url, { signal: controller.signal });
    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const csvText = await response.text();
    const parsedData = csvToObjects(csvText);

    if (!parsedData || parsedData.length === 0) {
      throw new Error("No data parsed from CSV");
    }

    // Map rows to match gallery image structure
    const mappedImages = parsedData
      .filter(item => item.src) // Image URL is required
      .map((item, index) => ({
        id: item.id ? parseInt(item.id, 10) : index + 1,
        src: item.src,
        alt: item.alt || item.title || 'Tamil School Image',
        title: item.title || '',
        description: item.description || '',
        category: item.category ? item.category.toLowerCase().trim() : 'all'
      }));

    if (mappedImages.length === 0) {
      throw new Error("No valid gallery images found in CSV");
    }

    return mappedImages;
  } catch (error) {
    console.warn("Gallery CMS Fetch failed, falling back to static local data:", error.message);
    return fallbackData;
  }
}

/**
 * Fetches Google Sheet CSV data for the Alert/Announcement Banner.
 * If fetching fails, returns null (silently hides the banner).
 *
 * @param {string} url - The published Google Sheet CSV URL for announcements.
 * @returns {Promise<Object|null>} Resolves to the parsed announcement object or null.
 */
export async function fetchAnnouncementCMS(url) {
  if (!url) {
    return null;
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4000);

    const response = await fetch(url, { signal: controller.signal });
    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const csvText = await response.text();
    const parsedData = csvToObjects(csvText);

    if (!parsedData || parsedData.length === 0) {
      throw new Error("No data parsed from CSV");
    }

    const firstRow = parsedData[0];
    return {
      active: firstRow.active ? firstRow.active.toUpperCase() === 'TRUE' : false,
      text_en: firstRow.text_en || firstRow.text || '',
      text_ta: firstRow.text_ta || firstRow.text_en || '',
      link_url: firstRow.link_url || firstRow.link || ''
    };
  } catch (error) {
    console.warn("Announcement CMS Fetch failed:", error.message);
    return null;
  }
}

/**
 * Fetches Google Sheet CSV data for key-value general school settings.
 *
 * @param {string} url - The published Google Sheet CSV URL for settings.
 * @returns {Promise<Object|null>} Resolves to parsed key-value pairs as a flat object or null.
 */
export async function fetchSettingsCMS(url) {
  if (!url) {
    return null;
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4000);

    const response = await fetch(url, { signal: controller.signal });
    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const csvText = await response.text();
    const parsedData = csvToObjects(csvText);

    if (!parsedData || parsedData.length === 0) {
      throw new Error("No data parsed from CSV");
    }

    const settings = {};
    parsedData.forEach(row => {
      if (row.key) {
        settings[row.key.trim()] = row.value ? row.value.trim() : '';
      }
    });

    return settings;
  } catch (error) {
    console.warn("Settings CMS Fetch failed:", error.message);
    return null;
  }
}

/**
 * Fetches Google Sheet CSV data for grade level curriculum classes.
 *
 * @param {string} url - The published Google Sheet CSV URL for classes.
 * @param {Array<Object>} fallbackData - Static fallback content for grade levels.
 * @returns {Promise<Array<Object>>} Resolves to the parsed class levels array.
 */
export async function fetchClassesCMS(url, fallbackData) {
  if (!url) {
    return fallbackData;
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);

    const response = await fetch(url, { signal: controller.signal });
    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const csvText = await response.text();
    const parsedData = csvToObjects(csvText);

    if (!parsedData || parsedData.length === 0) {
      throw new Error("No data parsed from CSV");
    }

    // Map rows to curriculum structure: { name: { en, ta }, description: { en, ta } }
    const mappedClasses = parsedData
      .filter(item => item.name_en) // English name is required
      .map(item => ({
        name: {
          en: item.name_en,
          ta: item.name_ta || item.name_en
        },
        description: {
          en: item.description_en || '',
          ta: item.description_ta || item.description_en || ''
        }
      }));

    if (mappedClasses.length === 0) {
      throw new Error("No valid class levels found in CSV");
    }

    return mappedClasses;
  } catch (error) {
    console.warn("Classes CMS Fetch failed, falling back to static local data:", error.message);
    return fallbackData;
  }
}
