const express = require('express');
const router = express.Router();

const businesses = [
  { id: 1, name: "Matopeni Groceries", category: "Groceries", phone: "0712345678", whatsapp: "0712345678", location: "Near Stage", consent: true },
  { id: 2, name: "Neema Groceries", category: "Groceries", phone: "0722123456", whatsapp: "0722123456", location: "Matopeni Road", consent: true },
  { id: 3, name: "Mama Akinyi Mboga", category: "Mama Mboga", phone: "0701122334", whatsapp: "0701122334", location: "Market", consent: true },
  { id: 4, name: "Mama Brian Mboga", category: "Mama Mboga", phone: "0705566778", whatsapp: "0705566778", location: "Market", consent: true },
  { id: 5, name: "Clean Wash", category: "Laundry", phone: "0711223344", whatsapp: "0711223344", location: "Matopeni", consent: true },
  { id: 6, name: "Quick Laundry", category: "Laundry", phone: "0722334455", whatsapp: "0722334455", location: "Near School", consent: true },
  { id: 7, name: "Smart Kinyozi", category: "Barbershop", phone: "0744556677", whatsapp: "0744556677", location: "Stage", consent: true },
  { id: 8, name: "Best Fade", category: "Barbershop", phone: "0733445566", whatsapp: "0733445566", location: "Matopeni", consent: true },
  { id: 9, name: "Safaricom Mpesa", category: "Mpesa", phone: "0711000000", whatsapp: "0711000000", location: "Center", consent: true },
  { id: 10, name: "Matopeni Water Point", category: "Water", phone: "0700000010", whatsapp: "0700000010", location: "Water Point", consent: true }
];

const announcements = [
  { id: 1, type: "Maji", message: "Maji itakuja kesho 6am-10am", date: "2026-11-23" },
  { id: 2, type: "Clean-up", message: "Community clean-up Saturday 8am", date: "2026-11-25" }
];

const safety = [
  { id: 1, name: "Mama Lucy Hospital", contact: "0201234567", phone: "0201234567", location: "Umoja" },
  { id: 2, name: "Matopeni Police Post", contact: "999", phone: "999", location: "Matopeni" }
];

router.get('/businesses', (req, res) => res.json(businesses));
router.get('/announcements', (req, res) => res.json(announcements));
router.get('/safety', (req, res) => res.json(safety));
router.get('/contact', (req, res) => res.json({ project: "Matopeni Hub - Group 5", phone: "0700-000-000", email: "matopenihub@gmail.com" }));
