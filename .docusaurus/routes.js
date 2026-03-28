import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/zh-Hans/',
    component: ComponentCreator('/zh-Hans/', 'f21'),
    routes: [
      {
        path: '/zh-Hans/',
        component: ComponentCreator('/zh-Hans/', 'cde'),
        routes: [
          {
            path: '/zh-Hans/',
            component: ComponentCreator('/zh-Hans/', '11c'),
            routes: [
              {
                path: '/zh-Hans/api/',
                component: ComponentCreator('/zh-Hans/api/', 'f46'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/api/advanced-search/album-advanced-search',
                component: ComponentCreator('/zh-Hans/api/advanced-search/album-advanced-search', 'e55'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/api/advanced-search/artist-advanced-search',
                component: ComponentCreator('/zh-Hans/api/advanced-search/artist-advanced-search', 'a98'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/api/advanced-search/genre-advanced-search',
                component: ComponentCreator('/zh-Hans/api/advanced-search/genre-advanced-search', '7f6'),
                exact: true
              },
              {
                path: '/zh-Hans/api/advanced-search/label-advanced-search',
                component: ComponentCreator('/zh-Hans/api/advanced-search/label-advanced-search', 'eb1'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/api/advanced-search/playlist-advanced-search',
                component: ComponentCreator('/zh-Hans/api/advanced-search/playlist-advanced-search', '3cd'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/api/advanced-search/podcast-advanced-search',
                component: ComponentCreator('/zh-Hans/api/advanced-search/podcast-advanced-search', '3d1'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/api/advanced-search/podcast-episode-advanced-search',
                component: ComponentCreator('/zh-Hans/api/advanced-search/podcast-episode-advanced-search', '28b'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/api/advanced-search/song-advanced-search',
                component: ComponentCreator('/zh-Hans/api/advanced-search/song-advanced-search', '6fe'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/api/advanced-search/user-advanced-search',
                component: ComponentCreator('/zh-Hans/api/advanced-search/user-advanced-search', '2b6'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/api/advanced-search/video-advanced-search',
                component: ComponentCreator('/zh-Hans/api/advanced-search/video-advanced-search', '527'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/api/api-3/',
                component: ComponentCreator('/zh-Hans/api/api-3/', '756'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/api/api-3/api-errors',
                component: ComponentCreator('/zh-Hans/api/api-3/api-errors', '2d5'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/api/api-3/api-xml-methods',
                component: ComponentCreator('/zh-Hans/api/api-3/api-xml-methods', '3f9'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/api/api-4/',
                component: ComponentCreator('/zh-Hans/api/api-4/', '8d9'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/api/api-4/api-advanced-search',
                component: ComponentCreator('/zh-Hans/api/api-4/api-advanced-search', '3b6'),
                exact: true
              },
              {
                path: '/zh-Hans/api/api-4/api-errors',
                component: ComponentCreator('/zh-Hans/api/api-4/api-errors', '779'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/api/api-4/api-json-methods',
                component: ComponentCreator('/zh-Hans/api/api-4/api-json-methods', '998'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/api/api-4/api-xml-methods',
                component: ComponentCreator('/zh-Hans/api/api-4/api-xml-methods', '36c'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/api/api-5/',
                component: ComponentCreator('/zh-Hans/api/api-5/', '4f9'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/api/api-5/api-advanced-search',
                component: ComponentCreator('/zh-Hans/api/api-5/api-advanced-search', 'd70'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/api/api-5/api-errors',
                component: ComponentCreator('/zh-Hans/api/api-5/api-errors', '173'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/api/api-5/api-json-methods',
                component: ComponentCreator('/zh-Hans/api/api-5/api-json-methods', '79f'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/api/api-5/api-standards',
                component: ComponentCreator('/zh-Hans/api/api-5/api-standards', 'f80'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/api/api-5/api-xml-methods',
                component: ComponentCreator('/zh-Hans/api/api-5/api-xml-methods', '80b'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/api/api-advanced-search',
                component: ComponentCreator('/zh-Hans/api/api-advanced-search', '998'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/api/api-browse',
                component: ComponentCreator('/zh-Hans/api/api-browse', '21e'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/api/api-changelog',
                component: ComponentCreator('/zh-Hans/api/api-changelog', '45d'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/api/api-errors',
                component: ComponentCreator('/zh-Hans/api/api-errors', 'db5'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/api/api-examples',
                component: ComponentCreator('/zh-Hans/api/api-examples', '803'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/api/api-json-methods',
                component: ComponentCreator('/zh-Hans/api/api-json-methods', 'd14'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/api/api-media-methods',
                component: ComponentCreator('/zh-Hans/api/api-media-methods', 'a55'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/api/api-standards',
                component: ComponentCreator('/zh-Hans/api/api-standards', '68a'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/api/api-xml-methods',
                component: ComponentCreator('/zh-Hans/api/api-xml-methods', 'cda'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/api/browse/album-browse',
                component: ComponentCreator('/zh-Hans/api/browse/album-browse', '0f7'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/api/browse/artist-browse',
                component: ComponentCreator('/zh-Hans/api/browse/artist-browse', '7a2'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/api/browse/catalog-browse',
                component: ComponentCreator('/zh-Hans/api/browse/catalog-browse', '9e8'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/api/browse/follower-browse',
                component: ComponentCreator('/zh-Hans/api/browse/follower-browse', '187'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/api/browse/genre-browse',
                component: ComponentCreator('/zh-Hans/api/browse/genre-browse', '30a'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/api/browse/label-browse',
                component: ComponentCreator('/zh-Hans/api/browse/label-browse', '1bf'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/api/browse/license-browse',
                component: ComponentCreator('/zh-Hans/api/browse/license-browse', '360'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/api/browse/live_stream-browse',
                component: ComponentCreator('/zh-Hans/api/browse/live_stream-browse', 'e32'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/api/browse/playlist-browse',
                component: ComponentCreator('/zh-Hans/api/browse/playlist-browse', '14e'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/api/browse/podcast_episode-browse',
                component: ComponentCreator('/zh-Hans/api/browse/podcast_episode-browse', '200'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/api/browse/podcast-browse',
                component: ComponentCreator('/zh-Hans/api/browse/podcast-browse', '93e'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/api/browse/share-browse',
                component: ComponentCreator('/zh-Hans/api/browse/share-browse', '077'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/api/browse/song-browse',
                component: ComponentCreator('/zh-Hans/api/browse/song-browse', 'f76'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/api/browse/user-browse',
                component: ComponentCreator('/zh-Hans/api/browse/user-browse', '4c9'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/api/browse/video-browse',
                component: ComponentCreator('/zh-Hans/api/browse/video-browse', 'd0a'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/api/subsonic',
                component: ComponentCreator('/zh-Hans/api/subsonic', '188'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/api/versions/',
                component: ComponentCreator('/zh-Hans/api/versions/', 'c34'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/api/versions/api-4.1/',
                component: ComponentCreator('/zh-Hans/api/versions/api-4.1/', 'b6e'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/api/versions/api-4.1/api-errors',
                component: ComponentCreator('/zh-Hans/api/versions/api-4.1/api-errors', '14d'),
                exact: true
              },
              {
                path: '/zh-Hans/api/versions/api-4.1/xml-methods',
                component: ComponentCreator('/zh-Hans/api/versions/api-4.1/xml-methods', '12d'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/api/versions/api-4.2/',
                component: ComponentCreator('/zh-Hans/api/versions/api-4.2/', '058'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/api/versions/api-4.2/api-advanced-search',
                component: ComponentCreator('/zh-Hans/api/versions/api-4.2/api-advanced-search', '2a9'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/api/versions/api-4.2/api-errors',
                component: ComponentCreator('/zh-Hans/api/versions/api-4.2/api-errors', 'b47'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/api/versions/api-4.2/api-json-methods',
                component: ComponentCreator('/zh-Hans/api/versions/api-4.2/api-json-methods', 'bac'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/api/versions/api-4.2/api-xml-methods',
                component: ComponentCreator('/zh-Hans/api/versions/api-4.2/api-xml-methods', '22b'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/api/versions/api-4.3/',
                component: ComponentCreator('/zh-Hans/api/versions/api-4.3/', 'ba1'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/api/versions/api-4.3/api-advanced-search',
                component: ComponentCreator('/zh-Hans/api/versions/api-4.3/api-advanced-search', 'd77'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/api/versions/api-4.3/api-errors',
                component: ComponentCreator('/zh-Hans/api/versions/api-4.3/api-errors', '3c0'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/api/versions/api-4.3/api-json-methods',
                component: ComponentCreator('/zh-Hans/api/versions/api-4.3/api-json-methods', 'bb0'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/api/versions/api-4.3/api-xml-methods',
                component: ComponentCreator('/zh-Hans/api/versions/api-4.3/api-xml-methods', '445'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/api/versions/api-5.0/',
                component: ComponentCreator('/zh-Hans/api/versions/api-5.0/', '50e'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/api/versions/api-5.0/api-advanced-search',
                component: ComponentCreator('/zh-Hans/api/versions/api-5.0/api-advanced-search', '6e4'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/api/versions/api-5.0/api-errors',
                component: ComponentCreator('/zh-Hans/api/versions/api-5.0/api-errors', '5ff'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/api/versions/api-5.0/api-json-methods',
                component: ComponentCreator('/zh-Hans/api/versions/api-5.0/api-json-methods', 'e87'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/api/versions/api-5.0/api-standards',
                component: ComponentCreator('/zh-Hans/api/versions/api-5.0/api-standards', '3ad'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/api/versions/api-5.0/api-xml-methods',
                component: ComponentCreator('/zh-Hans/api/versions/api-5.0/api-xml-methods', '55e'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/api/versions/api-5.1/',
                component: ComponentCreator('/zh-Hans/api/versions/api-5.1/', 'a95'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/api/versions/api-5.1/api-advanced-search',
                component: ComponentCreator('/zh-Hans/api/versions/api-5.1/api-advanced-search', 'cb0'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/api/versions/api-5.1/api-errors',
                component: ComponentCreator('/zh-Hans/api/versions/api-5.1/api-errors', '3e9'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/api/versions/api-5.1/api-json-methods',
                component: ComponentCreator('/zh-Hans/api/versions/api-5.1/api-json-methods', '478'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/api/versions/api-5.1/api-standards',
                component: ComponentCreator('/zh-Hans/api/versions/api-5.1/api-standards', 'd2c'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/api/versions/api-5.1/api-xml-methods',
                component: ComponentCreator('/zh-Hans/api/versions/api-5.1/api-xml-methods', '37d'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/api/versions/api-6.0/',
                component: ComponentCreator('/zh-Hans/api/versions/api-6.0/', 'd16'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/api/versions/api-6.0/api-advanced-search',
                component: ComponentCreator('/zh-Hans/api/versions/api-6.0/api-advanced-search', 'aba'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/api/versions/api-6.0/api-errors',
                component: ComponentCreator('/zh-Hans/api/versions/api-6.0/api-errors', '035'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/api/versions/api-6.0/api-json-methods',
                component: ComponentCreator('/zh-Hans/api/versions/api-6.0/api-json-methods', '850'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/api/versions/api-6.0/api-standards',
                component: ComponentCreator('/zh-Hans/api/versions/api-6.0/api-standards', 'e67'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/api/versions/api-6.0/api-xml-methods',
                component: ComponentCreator('/zh-Hans/api/versions/api-6.0/api-xml-methods', '077'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/demo',
                component: ComponentCreator('/zh-Hans/demo', '8dd'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/docker',
                component: ComponentCreator('/zh-Hans/docker', 'afb'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/docs/',
                component: ComponentCreator('/zh-Hans/docs/', '3ce'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/docs/clients/',
                component: ComponentCreator('/zh-Hans/docs/clients/', '231'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/docs/clients/api',
                component: ComponentCreator('/zh-Hans/docs/clients/api', '2d1'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/docs/clients/demo-server',
                component: ComponentCreator('/zh-Hans/docs/clients/demo-server', 'c10'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/docs/configuration/',
                component: ComponentCreator('/zh-Hans/docs/configuration/', '479'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/docs/configuration/acl',
                component: ComponentCreator('/zh-Hans/docs/configuration/acl', '692'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/docs/configuration/Ampache-Icecast-and-Liquidsoap',
                component: ComponentCreator('/zh-Hans/docs/configuration/Ampache-Icecast-and-Liquidsoap', '81e'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/docs/configuration/api',
                component: ComponentCreator('/zh-Hans/docs/configuration/api', 'ea8'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/docs/configuration/broadcasts',
                component: ComponentCreator('/zh-Hans/docs/configuration/broadcasts', '5a8'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/docs/configuration/catalog-filters',
                component: ComponentCreator('/zh-Hans/docs/configuration/catalog-filters', 'c39'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/docs/configuration/cron',
                component: ComponentCreator('/zh-Hans/docs/configuration/cron', '004'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/docs/configuration/democratic',
                component: ComponentCreator('/zh-Hans/docs/configuration/democratic', 'e0e'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/docs/configuration/ldap',
                component: ComponentCreator('/zh-Hans/docs/configuration/ldap', 'b78'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/docs/configuration/localplay/',
                component: ComponentCreator('/zh-Hans/docs/configuration/localplay/', '224'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/docs/configuration/localplay/httpq',
                component: ComponentCreator('/zh-Hans/docs/configuration/localplay/httpq', 'f27'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/docs/configuration/localplay/kodi',
                component: ComponentCreator('/zh-Hans/docs/configuration/localplay/kodi', 'a4b'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/docs/configuration/localplay/localplay-api',
                component: ComponentCreator('/zh-Hans/docs/configuration/localplay/localplay-api', 'c9e'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/docs/configuration/localplay/mpd',
                component: ComponentCreator('/zh-Hans/docs/configuration/localplay/mpd', 'cae'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/docs/configuration/localplay/Sample-Config-With-ALSA-and-Raspberry-PI',
                component: ComponentCreator('/zh-Hans/docs/configuration/localplay/Sample-Config-With-ALSA-and-Raspberry-PI', 'df8'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/docs/configuration/localplay/Sample-MPD-Config-For-Ampache',
                component: ComponentCreator('/zh-Hans/docs/configuration/localplay/Sample-MPD-Config-For-Ampache', 'b11'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/docs/configuration/localplay/upnp',
                component: ComponentCreator('/zh-Hans/docs/configuration/localplay/upnp', '42a'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/docs/configuration/localplay/vlc',
                component: ComponentCreator('/zh-Hans/docs/configuration/localplay/vlc', 'b67'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/docs/configuration/multi-artist',
                component: ComponentCreator('/zh-Hans/docs/configuration/multi-artist', 'ea4'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/docs/configuration/podcasts',
                component: ComponentCreator('/zh-Hans/docs/configuration/podcasts', '104'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/docs/configuration/remote-catalogs',
                component: ComponentCreator('/zh-Hans/docs/configuration/remote-catalogs', 'd2d'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/docs/configuration/subsonic',
                component: ComponentCreator('/zh-Hans/docs/configuration/subsonic', '606'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/docs/configuration/transcoding/',
                component: ComponentCreator('/zh-Hans/docs/configuration/transcoding/', '107'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/docs/configuration/transcoding/transcode-caching',
                component: ComponentCreator('/zh-Hans/docs/configuration/transcoding/transcode-caching', 'd23'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/docs/development/',
                component: ComponentCreator('/zh-Hans/docs/development/', '8cb'),
                exact: true
              },
              {
                path: '/zh-Hans/docs/development/branch-layout',
                component: ComponentCreator('/zh-Hans/docs/development/branch-layout', 'e76'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/docs/development/CONTRIBUTING',
                component: ComponentCreator('/zh-Hans/docs/development/CONTRIBUTING', '527'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/docs/development/enhancement-requests',
                component: ComponentCreator('/zh-Hans/docs/development/enhancement-requests', '0db'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/docs/development/issue-template',
                component: ComponentCreator('/zh-Hans/docs/development/issue-template', '2ae'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/docs/development/TRANSLATIONS',
                component: ComponentCreator('/zh-Hans/docs/development/TRANSLATIONS', 'aeb'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/docs/help/',
                component: ComponentCreator('/zh-Hans/docs/help/', '946'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/docs/help/cli-update-warning',
                component: ComponentCreator('/zh-Hans/docs/help/cli-update-warning', '69b'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/docs/help/import-lastfm-data',
                component: ComponentCreator('/zh-Hans/docs/help/import-lastfm-data', '889'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/docs/help/preferences-explained',
                component: ComponentCreator('/zh-Hans/docs/help/preferences-explained', '140'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/docs/help/troubleshooting/ampache7-for-admins',
                component: ComponentCreator('/zh-Hans/docs/help/troubleshooting/ampache7-for-admins', '7b8'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/docs/help/troubleshooting/ampache7-for-users',
                component: ComponentCreator('/zh-Hans/docs/help/troubleshooting/ampache7-for-users', '494'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/docs/help/troubleshooting/chart-faq',
                component: ComponentCreator('/zh-Hans/docs/help/troubleshooting/chart-faq', 'ce1'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/docs/help/troubleshooting/cli',
                component: ComponentCreator('/zh-Hans/docs/help/troubleshooting/cli', 'da0'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/docs/help/troubleshooting/faq',
                component: ComponentCreator('/zh-Hans/docs/help/troubleshooting/faq', '474'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/docs/help/upload-catalogs',
                component: ComponentCreator('/zh-Hans/docs/help/upload-catalogs', 'f3a'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/docs/information/ampache-use-cases',
                component: ComponentCreator('/zh-Hans/docs/information/ampache-use-cases', '9d7'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/docs/information/ampache7-client-structure-install-type',
                component: ComponentCreator('/zh-Hans/docs/information/ampache7-client-structure-install-type', '1bb'),
                exact: true
              },
              {
                path: '/zh-Hans/docs/information/TV-Shows-and-Movies',
                component: ComponentCreator('/zh-Hans/docs/information/TV-Shows-and-Movies', 'da6'),
                exact: true
              },
              {
                path: '/zh-Hans/docs/information/upgrade',
                component: ComponentCreator('/zh-Hans/docs/information/upgrade', 'b48'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/docs/information/Web-Interface',
                component: ComponentCreator('/zh-Hans/docs/information/Web-Interface', '6ee'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/docs/information/web-player',
                component: ComponentCreator('/zh-Hans/docs/information/web-player', '76d'),
                exact: true
              },
              {
                path: '/zh-Hans/docs/information/which-zip',
                component: ComponentCreator('/zh-Hans/docs/information/which-zip', '3b3'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/docs/installation/',
                component: ComponentCreator('/zh-Hans/docs/installation/', 'c4a'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/docs/installation/catalog',
                component: ComponentCreator('/zh-Hans/docs/installation/catalog', 'a20'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/docs/installation/guides/',
                component: ComponentCreator('/zh-Hans/docs/installation/guides/', 'f84'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/docs/installation/guides/cloudron-installation-guide',
                component: ComponentCreator('/zh-Hans/docs/installation/guides/cloudron-installation-guide', 'bc5'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/docs/installation/guides/sephtan-installation-guide',
                component: ComponentCreator('/zh-Hans/docs/installation/guides/sephtan-installation-guide', '7f0'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/docs/installation/guides/tutorial-to-install-ampache-on-xampp',
                component: ComponentCreator('/zh-Hans/docs/installation/guides/tutorial-to-install-ampache-on-xampp', 'd94'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/docs/installation/guides/windows-installation-on-iis7.5-from-he99',
                component: ComponentCreator('/zh-Hans/docs/installation/guides/windows-installation-on-iis7.5-from-he99', 'b9f'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/docs/installation/install-ampache-on-ubuntu2204',
                component: ComponentCreator('/zh-Hans/docs/installation/install-ampache-on-ubuntu2204', 'aab'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/docs/installation/windows-installation-guide',
                component: ComponentCreator('/zh-Hans/docs/installation/windows-installation-guide', '978'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/docs/old-information/',
                component: ComponentCreator('/zh-Hans/docs/old-information/', '187'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/docs/old-information/ampache-laravel-next-generation-preview',
                component: ComponentCreator('/zh-Hans/docs/old-information/ampache-laravel-next-generation-preview', 'f24'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/docs/old-information/ampache5-changes',
                component: ComponentCreator('/zh-Hans/docs/old-information/ampache5-changes', '69b'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/docs/old-information/ampache5-for-users',
                component: ComponentCreator('/zh-Hans/docs/old-information/ampache5-for-users', 'b2e'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/docs/old-information/ampache6-details',
                component: ComponentCreator('/zh-Hans/docs/old-information/ampache6-details', 'a99'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/docs/old-information/ampache6-for-users',
                component: ComponentCreator('/zh-Hans/docs/old-information/ampache6-for-users', '208'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/docs/old-information/installation-v4',
                component: ComponentCreator('/zh-Hans/docs/old-information/installation-v4', 'aa3'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/docs/old-information/mysql-faq',
                component: ComponentCreator('/zh-Hans/docs/old-information/mysql-faq', '828'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/docs/plugins/',
                component: ComponentCreator('/zh-Hans/docs/plugins/', '1c1'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/docs/plugins/writing-plugins',
                component: ComponentCreator('/zh-Hans/docs/plugins/writing-plugins', '71e'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/docs/themes',
                component: ComponentCreator('/zh-Hans/docs/themes', '765'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/donate',
                component: ComponentCreator('/zh-Hans/donate', 'a21'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/download',
                component: ComponentCreator('/zh-Hans/download', 'ef6'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/links',
                component: ComponentCreator('/zh-Hans/links', 'bda'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-Hans/rest/',
                component: ComponentCreator('/zh-Hans/rest/', 'd7b'),
                exact: true
              },
              {
                path: '/zh-Hans/',
                component: ComponentCreator('/zh-Hans/', 'a35'),
                exact: true,
                sidebar: "api"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
