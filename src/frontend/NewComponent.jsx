
import React, { useEffect, useState } from "react";

const API = "https://registry.npmjs.org";
const DOWNLOADS = "https://api.npmjs.org/downloads/point/last-week";
const SEARCH_API = "https://registry.npmjs.org/-/v1/search";

export default function NewComponent({ searchData }) {
  const [query, setQuery] = useState("");
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function fetchPackage(name) {
    const safeName = name.trim();
    const [metaRes, downloadRes] = await Promise.all([
      fetch(`${API}/${encodeURIComponent(safeName)}/latest`),
      fetch(`${DOWNLOADS}/${encodeURIComponent(safeName)}`)
    ]);

    if (!metaRes.ok) throw new Error(`Package "${safeName}" was not found`);

    const meta = await metaRes.json();
    const downloads = downloadRes.ok ? await downloadRes.json() : {};

    return {
      name: meta.name || safeName,
      version: meta.version || "Unknown",
      description: meta.description || "No description available",
      license: meta.license || "Not specified",
      weeklyDownloads: downloads.downloads ?? null,
      deprecated: Boolean(meta.deprecated),
      homepage: meta.homepage || "",
      repository: typeof meta.repository === "object"
        ? meta.repository?.url
        : meta.repository || ""
    };
  }

  
  async function searchPackages(names, mode = "packages") {
    const unique = [...new Set(names.map(n => n.trim()).filter(Boolean))].slice(0, 3);
    if (!unique.length) return;

    setLoading(true);
    setError("");
    setPackages([]);

    try {
      if (mode === "alternatives") {
        const target = unique[0];

        const response = await fetch(
          `${SEARCH_API}?text=${encodeURIComponent(target)}&size=15`
        );

        if (!response.ok) {
          throw new Error("Unable to find alternative packages right now.");
        }

        const data = await response.json();

        const preferred = ["dayjs", "date-fns", "luxon"];

        const results = (data.objects || []).map(item => item.package);

        const alternatives = [
          ...preferred
            .map(name => results.find(pkg => pkg.name === name))
            .filter(Boolean),
          ...results.filter(pkg =>
            !preferred.includes(pkg.name) &&
            pkg.name.toLowerCase() !== target.toLowerCase()
          )
        ]
          .slice(0, 3)
          .map(pkg => ({
            name: pkg.name,
            version: pkg.version || "Unknown",
            description: pkg.description || "No description available",
            license: "See npm",
            weeklyDownloads: null,
            deprecated: false,
            homepage: pkg.links?.homepage || "",
            repository: pkg.links?.repository || "",
          }));

        if (!alternatives.length) {
          throw new Error(`No alternatives found for "${target}".`);
        }

        setPackages(alternatives);
        return;
      }

      const results = await Promise.all(unique.map(fetchPackage));
      setPackages(results);
    } catch (err) {
      setError(err.message || "Unable to load package information.");
    } finally {
      setLoading(false);
    }
  }
  function handleSubmit(e) {
    e.preventDefault();

    const value = query.trim();
    const isAlternatives =
      /\b(alternatives?|packages like|similar to)\b/i.test(value);

    if (isAlternatives) {
      const match = value.match(
        /(?:alternatives?\s+(?:to|for)|packages?\s+(?:like|similar\s+to))\s+(.+)/i
      );

      const target = match?.[1]?.trim().split(/\s+/)[0];

      if (target) {
        searchPackages([target], "alternatives");
      } else {
        setError("Enter a package name to find alternatives.");
      }

      return;
    }

    const names = value
      .replace(/^npm\s+/i, "")
      .split(/[,\s]+/)
      .filter(Boolean);

    searchPackages(names);
  }

  useEffect(() => {
    if (!searchData) return;

    const data = Array.isArray(searchData) ? searchData[0] : searchData;
    const entities = data?.entities || [];
    const names = entities
      .map(item => item.sourceID || item.word)
      .filter(Boolean);

     if (names.length) {
      const originalQuery = data?.query || "";
      const wantsAlternatives =
        /\b(alternatives?|packages like|similar to)\b/i.test(originalQuery);

      searchPackages(
        wantsAlternatives ? [originalQuery.match(/(?:to|for|like)\s+([\w@./-]+)/i)?.[1] || names[0]] : names,
        wantsAlternatives ? "alternatives" : "packages"
      );
    }
  }, [searchData]);

  const formatDownloads = n =>
    n == null ? "Unavailable" : n.toLocaleString();

  return (
    <main className="pc-shell">
      <header className="pc-header">
        <div className="pc-brand">
          <span className="pc-logo">N</span>
          <div>
            <div className="pc-title">Package Compass</div>
            <div className="pc-subtitle">Make smarter package choices</div>
          </div>
        </div>
        <span className="pc-live"><span /> LIVE NPM DATA</span>
      </header>

      <section className="pc-hero">
        <div className="pc-eyebrow">YOUR DEVELOPER TOOLKIT</div>
        <h1>Find your perfect<br /><span>package match.</span></h1>
        <p>Explore packages, compare versions and discover what fits your next project.</p>

        <form className="pc-search" onSubmit={handleSubmit}>
          <span>⌕</span>
          <input
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Try express, fastify"
            aria-label="Package names separated by commas"
          />
          <button disabled={loading || !query.trim()}>
            {loading ? "Loading…" : "Explore ↗"}
          </button>
        </form>
        <div className="pc-hint">Try: react, express, fastify · Up to 3 packages</div>
      </section>

      {loading && <div className="pc-message">Fetching the latest package data…</div>}
      {error && <div className="pc-error" role="alert">{error}</div>}

      {!loading && !error && packages.length === 0 && (
        <section className="pc-empty">
          <div className="pc-empty-icon">⌘</div>
          <h2>Your next dependency starts here</h2>
          <p>Search for an npm package to see its version, usage and key details.</p>
          <div className="pc-examples">
            {["react", "express", "vite"].map(name => (
              <button key={name} onClick={() => {
                setQuery(name);
                searchPackages([name]);
              }}>{name} ↗</button>
            ))}
          </div>
        </section>
      )}

      {packages.length > 0 && (
        <section className="pc-results">
          <div className="pc-section-heading">
            <div>
              <div className="pc-eyebrow">REGISTRY RESULTS</div>
              <h2>{packages.length > 1 ? "Compare packages" : "Package overview"}</h2>
            </div>
            <span className="pc-count">{packages.length} package{packages.length > 1 ? "s" : ""}</span>
          </div>

          <div className="pc-grid">
            {packages.map(pkg => (
              <article className="pc-card" key={pkg.name}>
                <div className="pc-card-top">
                  <span className="pc-package-icon">{pkg.name.slice(0, 1).toUpperCase()}</span>
                  <span className={pkg.deprecated ? "pc-badge pc-badge-danger" : "pc-badge"}>
                    {pkg.deprecated ? "Deprecated" : "Published"}
                  </span>
                </div>
                <h3>{pkg.name}</h3>
                <p className="pc-description">{pkg.description}</p>
                <div className="pc-version">↗ Latest version <strong>{pkg.version}</strong></div>
                <div className="pc-stats">
                  <div><span>WEEKLY DOWNLOADS</span><strong>{formatDownloads(pkg.weeklyDownloads)}</strong></div>
                  <div><span>LICENSE</span><strong>{pkg.license}</strong></div>
                </div>
                <div className="pc-links">
                  {pkg.homepage && <a href={pkg.homepage} target="_blank" rel="noreferrer">Homepage ↗</a>}
                  <a href={`https://www.npmjs.com/package/${encodeURIComponent(pkg.name)}`} target="_blank" rel="noreferrer">npm page ↗</a>
                </div>
              </article>
            ))}
          </div>

          {packages.length > 1 && (
            <div className="pc-table-wrap">
              <h3>At a glance</h3>
              <table className="pc-table">
                <thead><tr><th>Package</th><th>Version</th><th>Weekly downloads</th><th>License</th></tr></thead>
                <tbody>
                  {packages.map(pkg => (
                    <tr key={pkg.name}>
                      <td>{pkg.name}</td>
                      <td>{pkg.version}</td>
                      <td>{formatDownloads(pkg.weeklyDownloads)}</td>
                      <td>{pkg.license}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      )}

      <footer className="pc-footer">
        <span>PACKAGE COMPASS</span>
        <span>Powered by the public npm registry</span>
      </footer>

      <style>{`
        .pc-shell{font-family:Inter,ui-sans-serif,system-ui,sans-serif;color:var(--hd-text, #e9edf7);background:var(--hd-surface,#10131d);border:1px solid var(--hd-border,#272c3b);border-radius:20px;overflow:hidden;width:100%;max-width:100%;box-sizing:border-box}
        .pc-shell *{box-sizing:border-box}
        .pc-header{display:flex;justify-content:space-between;align-items:center;gap:12px;padding:18px 22px;border-bottom:1px solid var(--hd-border,#272c3b)}
        .pc-brand{display:flex;align-items:center;gap:11px}.pc-logo{display:grid;place-items:center;width:38px;height:38px;border-radius:12px;background:#b8f36b;color:#17220b;font-weight:900;font-size:21px}
        .pc-title{font-weight:800;letter-spacing:-.3px}.pc-subtitle{font-size:11px;color:var(--hd-muted,#929bb0);margin-top:3px}
        .pc-live{font-size:9px;font-weight:800;letter-spacing:.7px;color:#a8ed72;white-space:nowrap}.pc-live span{display:inline-block;width:6px;height:6px;border-radius:50%;background:#a8ed72;margin-right:5px}
        .pc-hero{padding:26px 22px 22px;background:radial-gradient(ellipse at 85% 0%,#293d3a 0%,transparent 55%),var(--hd-surface,#10131d)}
        .pc-eyebrow{font-size:9px;font-weight:800;letter-spacing:1.6px;color:#a8ed72}
        .pc-hero h1{font-size:clamp(27px,5vw,42px);line-height:1.08;letter-spacing:-1.8px;margin:12px 0}
        .pc-hero h1 span{color:#b8f36b}.pc-hero>p{font-size:12px;line-height:1.7;color:var(--hd-muted,#a2aabe);max-width:360px}
        .pc-search{display:flex;align-items:center;gap:9px;padding:6px;background:var(--hd-input,#202534);border:1px solid #394252;border-radius:12px;margin-top:20px}
        .pc-search>span{font-size:22px;color:#9da6b9;padding-left:7px}.pc-search input{width:100%;min-width:0;background:transparent;border:0;outline:0;color:inherit;font-size:12px}
        .pc-search input::placeholder{color:#858fa4}.pc-search button{border:0;border-radius:8px;padding:11px 13px;background:#b8f36b;color:#19210e;font-size:11px;font-weight:800;white-space:nowrap;cursor:pointer}.pc-search button:disabled{opacity:.6}
        .pc-hint{font-size:10px;color:#828ca0;margin-top:9px}
        .pc-message,.pc-error{margin:18px 22px;padding:14px;border-radius:10px;font-size:12px;background:#202534;color:#cbd3e5}.pc-error{background:#3a2029;color:#ffc0c9}
        .pc-empty{text-align:center;padding:32px 20px 38px}.pc-empty-icon{margin:auto;width:48px;height:48px;border:1px solid #3b4751;border-radius:15px;display:grid;place-items:center;color:#b8f36b;font-size:25px}
        .pc-empty h2{font-size:16px;margin:16px 0 7px}.pc-empty p{font-size:11px;color:var(--hd-muted,#929bb0);line-height:1.6}
        .pc-examples{display:flex;justify-content:center;flex-wrap:wrap;gap:8px;margin-top:18px}.pc-examples button{background:transparent;color:inherit;border:1px solid #3a4252;border-radius:20px;padding:7px 13px;font-size:10px;cursor:pointer}
        .pc-results{padding:0 22px 22px}.pc-section-heading{display:flex;justify-content:space-between;align-items:center;gap:12px;margin:10px 0 16px}.pc-section-heading h2{font-size:20px;margin:7px 0 0;letter-spacing:-.5px}
        .pc-count{font-size:10px;border:1px solid #394252;border-radius:20px;padding:6px 9px;color:#c5ccda;white-space:nowrap}
        .pc-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,220px),1fr));gap:12px}
        .pc-card{min-width:0;padding:16px;border:1px solid #303849;border-radius:14px;background:var(--hd-card,#171c28)}
        .pc-card-top{display:flex;align-items:center;justify-content:space-between;gap:8px}.pc-package-icon{width:35px;height:35px;display:grid;place-items:center;border-radius:11px;background:#29392b;color:#b8f36b;font-size:15px;font-weight:900}
        .pc-badge{font-size:9px;color:#b8f36b;background:#273628;padding:5px 8px;border-radius:6px}.pc-badge-danger{color:#ffb2ba;background:#45262e}
        .pc-card h3{font-size:17px;margin:15px 0 6px;overflow-wrap:anywhere}.pc-description{font-size:11px;line-height:1.6;color:#a5aec1;min-height:35px;overflow-wrap:anywhere}
        .pc-version{font-size:10px;color:#9ca6ba;padding:11px 0;border-bottom:1px solid #303849}.pc-version strong{float:right;color:#dce4f2}
        .pc-stats{display:grid;grid-template-columns:1fr 1fr;gap:9px;padding:14px 0}.pc-stats div{min-width:0}.pc-stats span{display:block;font-size:8px;letter-spacing:.5px;color:#8893a8;margin-bottom:7px}.pc-stats strong{display:block;font-size:12px;overflow-wrap:anywhere}
        .pc-links{display:flex;flex-wrap:wrap;gap:12px;padding-top:11px;border-top:1px solid #303849}.pc-links a{color:#b8f36b;font-size:10px;text-decoration:none}
        .pc-table-wrap{margin-top:20px;border:1px solid #303849;border-radius:12px;padding:14px;overflow-x:auto}.pc-table-wrap h3{font-size:13px;margin:0 0 12px}.pc-table{width:100%;border-collapse:collapse;font-size:10px;text-align:left;white-space:nowrap}.pc-table th{color:#929bb0;font-weight:600}.pc-table th,.pc-table td{padding:10px 8px;border-bottom:1px solid #303849}.pc-table td:first-child{font-weight:700}.pc-footer{display:flex;justify-content:space-between;gap:12px;padding:15px 22px;border-top:1px solid var(--hd-border,#272c3b);font-size:9px;color:#828ca0}.pc-footer span:first-child{letter-spacing:1px;font-weight:800}
        @media(max-width:420px){.pc-header,.pc-hero{padding-left:15px;padding-right:15px}.pc-results{padding-left:15px;padding-right:15px}.pc-live{font-size:8px}.pc-footer{padding:13px 15px;font-size:8px}.pc-search button{padding:10px}.pc-card{padding:13px}}
        @media(prefers-color-scheme:light){.pc-shell{color:var(--hd-text,#202536);background:var(--hd-surface,#fff);border-color:var(--hd-border,#e1e5ed)}.pc-hero{background:radial-gradient(ellipse at 85% 0%,#e8f6df 0%,transparent 55%),var(--hd-surface,#fff)}.pc-hero h1{color:#202536}.pc-hero>p,.pc-subtitle,.pc-hint,.pc-empty p{color:#667085}.pc-search{background:#f5f7fa;border-color:#dce1e9}.pc-search input{color:#202536}.pc-card{background:var(--hd-card,#fafbfc);border-color:#e1e5ed}.pc-description,.pc-version{color:#667085}.pc-version strong,.pc-stats strong{color:#202536}.pc-stats span,.pc-table th{color:#667085}.pc-count,.pc-examples button{color:#344054;border-color:#dce1e9}.pc-table-wrap,.pc-table th,.pc-table td,.pc-links,.pc-version{border-color:#e1e5ed}.pc-footer,.pc-header{border-color:#e1e5ed}.pc-logo{background:#263b20;color:#fff}.pc-live{color:#39751c}.pc-live span{background:#39751c}}
      `}</style>
    </main>
  );
}
