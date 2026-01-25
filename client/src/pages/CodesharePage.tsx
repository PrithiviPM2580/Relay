import { useParams } from "react-router-dom";
import { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { StreamLanguage } from "@codemirror/language";
import { javascript } from "@codemirror/legacy-modes/mode/javascript";
import { python } from "@codemirror/legacy-modes/mode/python";
import { java } from "@codemirror/legacy-modes/mode/clike";
// import { php } from "@codemirror/legacy-modes/mode/php";
import { ruby } from "@codemirror/legacy-modes/mode/ruby";
import { go } from "@codemirror/legacy-modes/mode/go";
import { rust } from "@codemirror/legacy-modes/mode/rust";
import { sql } from "@codemirror/legacy-modes/mode/sql";
import { shell } from "@codemirror/legacy-modes/mode/shell";
import { css } from "@codemirror/legacy-modes/mode/css";
import { html } from "@codemirror/legacy-modes/mode/xml";

const LANGUAGES = [
  { name: "JavaScript", mode: javascript },
  { name: "Python", mode: python },
  { name: "Java", mode: java },
  // { name: "PHP", mode: php },
  { name: "Ruby", mode: ruby },
  { name: "Go", mode: go },
  { name: "Rust", mode: rust },
  { name: "SQL", mode: sql },
  { name: "Bash/Shell", mode: shell },
  { name: "CSS", mode: css },
  { name: "HTML", mode: html },
];

const THEMES = [
  { name: "Light", theme: "light" },
  { name: "Dark", theme: "dark" },
  { name: "Dracula", theme: "dracula" },
  { name: "Solarized Light", theme: "solarized light" },
  { name: "Solarized Dark", theme: "solarized dark" },
];

export default function CodesharePage() {
  const { id } = useParams<{ id: string }>();
  const [code, setCode] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState(0);
  const [selectedTheme, setSelectedTheme] = useState(0);

  return <div className="min-h-screen overflow-hidden bg-background p-6"></div>;
}
