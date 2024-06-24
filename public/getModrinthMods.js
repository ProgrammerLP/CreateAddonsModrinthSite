export async function getModrinthMods() {
    try {
      const response = await fetch("https://www.adeptstack.net/News.json");
      const newsData = await response.json();
      return newsData;
    } catch (error) {
      console.error('Error loading news:', error);
      return [];
    }
  } 