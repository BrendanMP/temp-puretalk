export default {
  async fetch(request) {
    return new Response(generateMaintenancePage(), {
      status: 503,
      headers: {
        "Content-Type": "text/html",
        "Retry-After": "3600",
      },
    });
  },
};

function generateMaintenancePage() {
  return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>H2O Direct</title>

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
      rel="stylesheet"
    />

    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      html {
        font-family: Montserrat, Arial, sans-serif;
      }
      body {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100dvh;
        padding: 4rem;
      }
    </style>
  </head>
  <body>
    <img
      src="https://puretalk-temp.netlify.app/H2O-Direct-logo.png"
      alt="H2O Direct Logo"
      style="max-width: 400px; height: auto; margin-bottom: 1rem"
    />
    <p>We'll be back soon!</p>
  </body>
</html>
`;
}
