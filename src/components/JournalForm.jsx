import React, { useState, useEffect } from "react";

const JournalForm = () => {
  const [entry, setEntry] = useState("");
  const [journalHistory, setJournalHistory] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("journal-history");
    if (stored) {
      setJournalHistory(JSON.parse(stored));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const today = new Date().toISOString().split("T")[0];
    const newEntry = {
      date: today,
      text: entry.trim(),
    };

    const updated = [
      ...journalHistory.filter((item) => item.date !== today),
      newEntry,
    ];

    setJournalHistory(updated);
    localStorage.setItem("journal-history", JSON.stringify(updated));
    setEntry("");
  };

  return (
    <main className="max-w-3xl mx-auto px-6 py-8">
      <h2 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-white">
        Write Today's Journal
      </h2>

      <form onSubmit={handleSubmit} className="mb-8">
        <label htmlFor="journal-entry" className="sr-only">
          Journal Entry
        </label>
        <textarea
          id="journal-entry"
          value={entry}
          onChange={(e) => setEntry(e.target.value)}
          className="w-full p-4 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          rows={6}
          placeholder="Write your thoughts or reflections here..."
        />
        <button
          type="submit"
          disabled={!entry.trim()}
          className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 disabled:bg-indigo-400 transition disabled:cursor-not-allowed"
        >
          Save Entry
        </button>
      </form>

      <section>
        <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
          Previous Entries
        </h3>
        <ul className="space-y-4">
          {journalHistory
            .sort((a, b) => (a.date < b.date ? 1 : -1))
            .map((item, index) => (
              <li
                key={item.date}
                className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm relative"
              >
                <time className="block mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                  {item.date}
                </time>
                <textarea
                  className="w-full text-sm resize-none p-3 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  rows={4}
                  value={item.text}
                  onChange={(e) => {
                    const updated = [...journalHistory];
                    updated[index].text = e.target.value;
                    setJournalHistory(updated);
                    localStorage.setItem(
                      "journal-history",
                      JSON.stringify(updated)
                    );
                  }}
                  aria-label={`Edit journal entry for ${item.date}`}
                />
                <button
                  onClick={() => {
                    if (
                      window.confirm(
                        "Are you sure you want to delete this journal entry?"
                      )
                    ) {
                      const filtered = journalHistory.filter(
                        (_, i) => i !== index
                      );
                      setJournalHistory(filtered);
                      localStorage.setItem(
                        "journal-history",
                        JSON.stringify(filtered)
                      );
                    }
                  }}
                  className="absolute top-4 right-4 text-red-600 hover:text-red-800 text-sm"
                  aria-label={`Delete journal entry for ${item.date}`}
                >
                  Delete
                </button>
              </li>
            ))}
        </ul>
      </section>
    </main>
  );
};

export default JournalForm;
