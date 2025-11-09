# Supabase Datenbank Setup

## Tabellen-Struktur

Für jede Liste in Ihrer App benötigen Sie eine Tabelle in Supabase mit folgender Struktur:

### Spalten (Columns)

| Spaltenname | Typ | Beschreibung |
|------------|-----|--------------|
| `id` | bigint | Primary Key (auto-increment) |
| `title` | text | Der Name/Titel des Eintrags |
| `Platzierung` | integer | Die Position/Ranking (0 = erste Position) |
| `initPos` | integer | Initiale Position |
| `link` | text | Der Link (ohne https://) |
| `incfirst` | integer | Counter für erste Position |
| `movement` | integer | Bewegungsrichtung (0=keine, 1=runter, 2=hoch) |

**Wichtig:** `Platzierung` muss großgeschrieben sein!

## Tabellen-Namen

Die folgenden Tabellen müssen in Supabase erstellt werden:

1. **chattingApps** - für Route: `/chatting-apps`
2. **searchEngines** - für Route: `/search-engines`
3. **streamingUnlimited** - für Route: `/streaming-unlimited`
4. **clouds** - für Route: `/cloud-downloads`
5. **youtubesocials** - für Route: `/youtube-social`
6. **videoEditors** - für Route: `/video-editors`

## SQL zum Erstellen einer Tabelle

```sql
CREATE TABLE IF NOT EXISTS public.searchEngines (
    id BIGSERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    Platzierung INTEGER NOT NULL DEFAULT 0,
    initPos INTEGER NOT NULL DEFAULT 0,
    link TEXT NOT NULL,
    incfirst INTEGER NOT NULL DEFAULT 0,
    movement INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Row Level Security aktivieren
ALTER TABLE public.searchEngines ENABLE ROW LEVEL SECURITY;

-- Policy für öffentlichen Lesezugriff
CREATE POLICY "Enable read access for all users" ON public.searchEngines
    FOR SELECT USING (true);

-- Policy für öffentlichen Schreibzugriff (optional, für Entwicklung)
CREATE POLICY "Enable insert for all users" ON public.searchEngines
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Enable update for all users" ON public.searchEngines
    FOR UPDATE USING (true);
```

**Wiederholen Sie dies für alle Tabellen!** (Ersetzen Sie einfach `searchEngines` mit den anderen Tabellennamen)

## Beispiel-Daten einfügen

```sql
INSERT INTO public.searchEngines (title, Platzierung, initPos, link, incfirst, movement)
VALUES 
    ('Google', 0, 0, 'google.com', 0, 0),
    ('Bing', 1, 1, 'bing.com', 0, 0),
    ('DuckDuckGo', 2, 2, 'duckduckgo.com', 0, 0);
```

## Wichtig: Sortierung

Die App sortiert automatisch nach der Spalte `Platzierung` aufsteigend:
- **0** = Erste Position
- **1** = Zweite Position
- **2** = Dritte Position
- usw.

## App-Routing

Die URL-Struktur ist: `/folder/{liste-name}`

Beispiele:
- `http://localhost:8100/folder/search-engines` → lädt Tabelle `searchEngines`
- `http://localhost:8100/folder/chatting-apps` → lädt Tabelle `chattingApps`

## Fehlersuche

Falls keine Daten angezeigt werden:

1. **Überprüfen Sie die Browser-Konsole** auf Fehlermeldungen
2. **Checken Sie Supabase RLS Policies** - sind sie aktiviert?
3. **Verifizieren Sie die Tabellennamen** in Supabase
4. **Testen Sie die Verbindung** in `src/environments/environment.ts`

## Fallback-Verhalten

Wenn Supabase keine Daten liefert, verwendet die App automatisch die hardcodierten Daten aus `src/app/folder/db.ts` als Fallback.
