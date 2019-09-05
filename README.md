# WebDev Projekt 2019 - Cranach Digital App Archive
Praxisprojekt zum Vertiefungsmodul Web Development 2019

## Back End

### 13.08.2019
#### Done:
- Basic PWA Testing (Online/Offline Data)

#### To-Do:
- QR-Scanner Implementation (Does it work?)

### 14.08.2019
#### Done:
- Early Stage of CDAA with QR-Scanner, Scan-History and Gallery
  - Tested on Microsoft Surface and Samsung Galaxy S7

#### To-Do:
- Code Refactoring
- Style/Theme Completion in Cooperation with @inf166
- Implementation of PWA Functionality

### 15.08.2019 
#### Done:
- @inf166 Body fix -> Content now looks like before
#### To-Do:
- ActivePageIndicator via JS (navigation.js)

### 21.08.2019 
#### Done:
- Minor (undocumented) Bugfixes
- Gallery & History Image Linking (Access Info-Page via Gallery)
- Start/Stop/Restart Camera to reduce battery consumption

#### To-Do:
- Implementation of PWA Functionality

### 03.09.2019 
#### Done:
- Minor Bugfixes & Style Updates
- Changed QR-Validation Functionality
- Updated Info Page Structure to work with Styles
- Updated fakeAPI to work with Image View (ghetto, but fine for prototyping)
- Added Additional Image View + Navigation (requires internet connection)

#### To-Do:
- Info Page Styling
- Image View Styling -> Needs Rework from @inf166
- *Implementation of PWA Functionality*

### 04.09.2019 
#### Done:
- Implementation of PWA Functionality
  - Manifest File/Icons
  - Service-Worker
- Static Asset Caching
  - Web App (Styles, Scripts, ...)
  - Gallery Data (gallery.json)
- Dynamic Asset Caching
  - Thumbnail Images
  - Image View Images (will be removed from caching)

#### To-Do:
- Service-Worker Improvements (see comments)
- Page Styling from/with @inf166
  - New Navigation Issues
  - Image View !!!

#### Comments:
- PWA Installation works flawless on Android Devices
- PWA works offline, but requires multiple reloads to fetch images from dynamic cache
  - Should be be sufficient for a prototype, but can be improved
- Image View Images are getting cached
  - Should be removed from caching as they require a lot of space on the device
  - Page is only available with active internet connection anyway

### 05.09.2019 
#### Done:
- Improved Navigation Icon Styling
- Improved Dynamic Caching
- Improved ImageView Styling

#### To-Do:
- More Service-Worker Improvements
- More Page Styling

## License
[GNU General Public License v3.0](https://github.com/Inf166/WDSS19-Praxisarbeit/blob/master/LICENSE)