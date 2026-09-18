# Intimacy Menu Generator

> What would you like to do tonight?

A local-first tool for partners to co-create intimacy menus: shared lists of activities to help answer the question "what would we like to do tonight?"

Participants create collections of activities representing what is on offer for a particular group, context, or evening. Activities could be anything people might do together - board games, watching TV on the sofa together, sexual or kink activities.

Collections are presented either as menus - as in a restaurant - or as decks of cards that can be browsed and drawn from.

## User stories

- [ ] **Collection creation**: Create and edit containers for activities which can be viewed as a menu or a deck
- [ ] **Activity creation**: Create and edit activities within collections
  - [ ] **Tags**: Assign tags to activities for easier categorization and filtering
  - [ ] **Attributes**: Assign attributes such as energy, time, and spice level to help choose what suits the moment
- [ ] **Views**
  - [ ] **Printable menu**: Produce a print-friendly menu from a collection
  - [ ] **Printable deck**: Produce cards that can be printed, cut out, and used physically
  - [ ] **Interactive deck**: Browse, search, shuffle, lay out, and draw cards in a web interface

## Consent and boundaries

The tool supports the process of co-creating an explicit, positive set of options. A collection only contains activities that its participants have agreed may be offered.

All artifacts should reinforce consent and respect for boundaries. Just because a dish is on the menu doesn't mean you can force me to eat it.

## Data and privacy

The first version is local-first:

- Data is stored on the user's device.
- Accounts, server-side storage, and remote collaboration are out of scope.
- Import and export are in scope.

The import/export format should be versioned, human-readable, and diffable. Exports should be deterministic so that a change to a card or collection gives a focused, reviewable diff. This provides a future path to file-based or Git-backed collaboration without making it a requirement for the initial app.

## Example collection

```yaml
version: 1
title: A cosy evening
sections:
  - title: Slow starts
    activities:
      - title: Tea and catch up
        tags: [Indoors, Conversation]
        attributes:
          - icon: "⚡"
            value: 1
          - icon: "⏱️"
            value: 2
      - title: Listen to an album
        tags: [Indoors, Music]
        attributes:
          - icon: "⚡"
            value: 1
          - icon: "⏱️"
            value: 2
      - title: Play a card game
        tags: [Indoors, Games]
        attributes:
          - icon: "⚡"
            value: 2
          - icon: "⏱️"
            value: 3
  - title: Shared time
    activities:
      - title: Cook dinner together
        tags: [Indoors, Food]
        attributes:
          - icon: "⚡"
            value: 3
          - icon: "⏱️"
            value: 4
      - title: Evening walk
        tags: [Outdoors, Conversation]
        attributes:
          - icon: "⚡"
            value: 2
          - icon: "⏱️"
            value: 3
```
