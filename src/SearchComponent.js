import React, { useState, useRef } from "react";

const SearchHighlightComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [htmlContent, setHtmlContent] = useState("");
  const [originalContent, setOriginalContent] = useState("");
  const contentRef = useRef(null);

  // Fonction pour charger le fichier HTML
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target.result;
        setHtmlContent(content);
        setOriginalContent(content); // Sauvegarde du contenu original
      };
      reader.readAsText(file);
    }
  };

  const handleSearch = () => {
    if (!searchTerm) return;

    // Réinitialise le contenu à la version originale avant de surligner à nouveau
    const resetContent = originalContent;
    const regex = new RegExp(`(${searchTerm})`, "gi");
    const newContent = resetContent.replace(regex, `<mark>$1</mark>`);

    setHtmlContent(newContent);

    // Scroller vers le premier élément surligné
    setTimeout(() => {
      const firstMatch = contentRef.current.querySelector("mark");
      if (firstMatch) {
        firstMatch.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }, 100);
  };

  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
      }}
    >
      <input type="file" accept=".html" onChange={handleFileChange} />
      <input
        type="text"
        placeholder="Entrez votre recherche..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Rechercher</button>

      {/* Contenu HTML affiché avec surlignage */}
      <div
        ref={contentRef}
        dangerouslySetInnerHTML={{ __html: htmlContent }}
        style={{
          maxHeight: "700px",
          overflowY: "auto",
          border: "1px solid #ccc",
          padding: "10px",
          backgroundColor: "black",
          color: "white",
        }}
      />
    </div>
  );
};

export default SearchHighlightComponent;
