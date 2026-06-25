"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

const KEYWORDS = /\b(import|from|export|function|return|const)\b/;
const STRING = /(".*?"|'.*?')/;
const TOKEN_REGEX = new RegExp(`(${STRING.source}|${KEYWORDS.source})`, "g");

function tokenize(line: string) {
  const parts = line.split(TOKEN_REGEX).filter((p) => p !== undefined && p !== "");
  return parts.map((part, i) => {
    if (/^["'].*["']$/.test(part)) {
      return (
        <span key={i} className="text-secondary">
          {part}
        </span>
      );
    }
    if (KEYWORDS.test(part) && part.length < 12) {
      return (
        <span key={i} className="text-primary">
          {part}
        </span>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

export function CodePreview({
  title,
  preview,
  code,
}: {
  title: string;
  preview: React.ReactNode;
  code: string;
}) {
  const [expanded, setExpanded] = useState(false);
  const lines = code.trim().split("\n");
  const collapsedCount = 3;
  const visibleLines = expanded ? lines : lines.slice(0, collapsedCount);
  const hasMore = lines.length > collapsedCount;

  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-sm font-semibold text-foreground">{title}</h3>
      <div className="rounded-lg border border-border">
        <div className="flex min-h-[220px] items-center justify-center rounded-t-lg bg-background p-10">
          {preview}
        </div>
        <div className="relative rounded-b-lg border-t border-border bg-muted/40">
          <pre className="overflow-x-auto p-4 text-xs leading-5">
            {visibleLines.map((line, i) => (
              <div key={i} className="flex gap-4 font-mono">
                <span className="w-4 shrink-0 text-right text-muted-foreground/50 select-none">
                  {i + 1}
                </span>
                <span>{tokenize(line)}</span>
              </div>
            ))}
          </pre>
          {!expanded && hasMore && (
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 rounded-b-lg bg-gradient-to-t from-muted/90 to-transparent" />
          )}
          {hasMore && (
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => setExpanded((v) => !v)}
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-background px-4 text-xs shadow-bottom-small"
            >
              {expanded ? "Hide Code" : "View Code"}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
