module.exports={
        "scheme": "myapptabsexporouter", 
        "expo": {
            "extra": {
                "eas": {
                  "projectId": "OrganizerApp"
                }
              },
          "scheme": "myapptabsexporouter", 
          "name": "OrganizerApp",
          "slug": "OrganizerApp",
          "version": "1.0.0",
          "orientation": "portrait",
          "icon": "./assets/icon.png",
          "userInterfaceStyle": "light",
          "splash": {
            "image": "./assets/splash.png",
            "resizeMode": "contain",
            "backgroundColor": "#ffffff"
          },
          "assetBundlePatterns": [
            "**/*"
          ],
          "ios": {
            "supportsTablet": true
          },
          "android": {
            "adaptiveIcon": {
              "foregroundImage": "./assets/adaptive-icon.png",
              "backgroundColor": "#ffffff"
            }
          },
          "web": {
            "favicon": "./assets/favicon.png",
            "bundler": "metro"
          },
          "plugins": [
            "expo-router"
          ]
        }
      }
      