const express = require('express');
const router = express.Router();

const businesses = [
  { id: 1, name: "Matopeni Groceries", category: "Groceries", whatsapp: "07XX", location: "Near Stage", consent: true },
  { id: 2, name: "Neema Groceries", category: "Groceries", whatsapp: "07XX", location: "Matopeni Rd", consent: true },
  { id: 3, name: "Mama Akinyi Mboga", category: "Mama Mboga", whatsapp: "07XX", location: "Market", consent: true },
  { id: 4, name: "Mama Brian Mboga", category: "Mama Mboga", whatsapp: "07XX", location: "Market", consent: true },
  { id: 5, name: "Clean Wash", category: "Laundry", whatsapp: "07XX", location: "Matopeni", consent: true },
  { id: 6, name: "Quick Laundry", category: "Laundry", whatsapp: "07XX", location: "Near School", consent: true },
  { id: 7, name: "Smart Kinyozi", category: "Barbershop", whatsapp: "07XX", location: "Stage", consent: true },
  { id: 8, name: "Best Fade", category: "Barbershop", whatsapp: "07XX", location: "Matopeni", consent: true },
  { id: 9, name: "Safaricom Mpesa", category: "Mpesa", whatsapp: "07XX", location: "Center", consent: true },
  { id: 10, name: "Matopeni Water Point", category: "Water", whatsapp: "07XX", location: "Water Point", consent: true }
];

const announcements = [
  { id: 1, type: "Maji", message: "Maji itakuja kesho 6am-10am", date: "2026-11-23" },
  { id: 2, type: "Clean-up", message: "Clean-up Saturday 8am Chief's camp", date: "2026-11-25" }
];

const safety = [
  { id: 1, name: "Mama Lucy Hospital", contact: "020...", location: "Umoja" },
  { id: 2, name: "Matopeni Police Post", contact: "999", location: "Matopeni" }
];

router.get('/businesses', (req, res) => res.json(businesses));
router.get('/announcements', (req, res) => res.json(announcements));
router.get('/safety', (req, res) => res.json(safety));

module.exports = router;
