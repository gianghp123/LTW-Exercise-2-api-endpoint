export async function GET(request) {
    try {
      const response = await fetch('https://dummyjson.com/todos/random/10');

      if (!response.ok) {
        throw new Error('Failed to fetch todo');
      }

      const data = await response.json();
  
      return new Response(JSON.stringify(data), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
  }
