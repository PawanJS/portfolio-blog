import { useTheme } from 'next-themes';
import React, { useState, useEffect } from 'react';
export default function Index() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  var linkList = ['https://github.com/PawanJS'];
  var iconList = ['github'];

  function iconLinkGenerator(name, index, theme, link) {
    return (
      <a href={link} key={index} target="_blank" rel="noreferrer noopener">
        <img
          src={`https://s2.svgbox.net/social.svg?ic=${name}&color=${
            theme === 'light' ? '000' : 'fff'
          }`}
          className="social-icons ml-2"
        />
      </a>
    );
  }
  return (
    <div className="flex max-w-3xl my-8">
      {linkList.map((link, index) =>
        iconLinkGenerator(iconList[index], index, theme, link)
      )}
    </div>
  );
}
