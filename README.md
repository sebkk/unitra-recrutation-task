# Unitra Recrutation Task

The project was written in NextJS 14.2.11 App directory.

Packages used to improve the application:

- next-intl - handling page translation
- swiper - carousel for product photos
- axios - handling REST requests

**Styling**

I decided to use the basic CSS Modules to style the page, because installing additional packages for such a small project seemed unnecessary to me.

**Page translation**

The page is translated using the next-intl package, I skipped translating products (titles and descriptions), because I use an external database.

**Mocked data**

To illustrate data fetching, I used the external fakestoreapi.com API, because it met the guidelines that were given in the task.

**Folder structure**

Using the NextJS functionality - App Directory - I decided to name all folders that are in the app folder according to the convention with "\_" before the folder name. I store routing files in the (routing) folder.
