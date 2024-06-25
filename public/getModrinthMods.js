export async function getModrinthMods() {
    try {
      const response = await fetch("https://api.modrinth.com/v2/search?limit=100&facets=[[%22project_type:mod%22]]&offset=100&query=create");
      const newsData = await response.json();
      return newsData;
    } catch (error) {
      console.error('Error loading news:', error);
      return [];
    }
  } 