# ASTANA IT UNIVERSITY · School of Digital Public Administration
## WEEKLY INTEGRATED LEARNING RECORD 8
**Week 8: Financial Tools, Ratios & AI Discrepancy Audit**

- **Student:** Manat Amir (ID: 261434, Group: DPA-2602)
- **Course:** Business Administration (BA 1204 / BA2026) · Trimester 1 (2026–2027)
- **Course Instructors:** Gaukhar Yeshenkulova (Lectures) · Symbat Ashimkhanova (Practices)
- **Company B (Focal):** AB Auto (Astana, 4 IPs, Simplified Tax 3%, Koktal 15B)
- **Company A (Comparator):** Interkom-Auto (TOO, General Tax Regime 12% VAT, >1.3B KZT Taxpayer)

---

### Field 1 · Concept

Enterprise financial governance rests on the fundamental **Balance Sheet Equation** (`Assets = Liabilities + Equity`), which partitions economic resources and claims by maturity [1], [2]. Current assets (cash, receivables, merchandise inventory) and current liabilities (30–45 day trade payables) capture short-term working capital cycles within twelve months, whereas long-term assets (warehouse racking, equipment) and long-term obligations reflect structural solvency. Crucially, managers must separate **accounting profit from real cash flow** [2]: accrual profit records revenue upon invoice issuance, whereas cash flow tracks actual monetary inflows settling supplier bills. Diagnostic **financial ratios**—liquidity (`Current Ratio`, `Acid-Test`), profitability (`Net Profit Margin`), and leverage (`Debt-to-Equity`)—translate raw ledgers into standardized health signals [1], [2].

**Concept Check:** Financial ratios provide directional benchmarks rather than self-executing verdicts because healthy thresholds depend heavily on tax regimes, inventory buffers, and payment velocity. Automated AI systems suffer from severe **contextual blindness**: models evaluate static formulas without observing local cash turnover, cross-border supply friction, or off-ledger B2B trust, making a human auditor indispensable for judging enterprise resilience.

### Field 2 · Application (AB Auto FY 2026 Ratio Calculation & Discrepancy Audit)

Using verified 2026 management accounts across AB Auto's four Individual Proprietorships (Sales `384.0M KZT`, Net Profit `26.88M KZT`, Current Assets `42.0M KZT`, Inventory `34.0M KZT`, Quick Assets `8.0M KZT`, Current Liabilities `18.0M KZT`, Total Liabilities `22.0M KZT`, Equity `28.0M KZT`), four core financial ratios were independently computed:

- **Current Ratio:** `Current Assets / Current Liabilities = 42.0M / 18.0M = 2.33x` *(Benchmark: 1.50x – 2.00x)*
- **Acid-Test (Quick) Ratio:** `(Current Assets - Inventory) / Current Liabilities = (42.0M - 34.0M) / 18.0M = 0.44x` *(Benchmark: >= 1.00x)*
- **Net Profit Margin:** `(Net Profit / Net Sales) × 100 = (26.88M / 384.0M) × 100 = 7.00%` *(Benchmark: 5.5% – 8.0%)*
- **Debt-to-Equity Ratio:** `Total Liabilities / Owner's Equity = 22.0M / 28.0M = 0.79x` *(Benchmark: < 1.00x)*

| Financial Ratio | Verified Value | Raw AI Diagnosis (GPT-4o) | Discrepancy Root Cause & Human Audit | Verdict |
| :--- | :--- | :--- | :--- | :--- |
| **Current Ratio** | **2.33x** | Excess idle liquidity sitting unproductively above 2.0x. | Asset-mix misinterpretation: **81%** (`34.0M KZT`) is physical GAZelle leaf-spring buffer stock at Koktal 15B hedging EAEU transit delays. | **CORRECT** |
| **Acid-Test (Quick)** | **0.44x** | Imminent default and severe bankruptcy risk (<1.0x). | Contextual blindness: daily **Kaspi QR cash turnover (>3.0M KZT/day)** covers 30–45 day supplier deferrals with zero cash gaps. | **REJECT** |
| **Net Profit Margin** | **7.00%** | Thin margin vulnerable to 20% CIT and 12% VAT erosion. | Wrong tax baseline: AB Auto operates under **3% Simplified Tax** (Art. 683 RK Tax Code) [3] and holds a **>=18%** gross margin floor. | **CORRECT** |
| **Debt-to-Equity** | **0.79x** | Moderate leverage backed by owner capital. | Accepted; human audit adds segregation of personal family auto loans outside the 4 operational IPs. | **ACCEPT** |

### Field 3 · Verification and AI

- **AI Systems Disclosed (Level 2):** ChatGPT (`GPT-4o`) and `Antigravity` (zero OpenStax or course core textbooks uploaded).
- **AI Task Executed:** Generated mechanical textbook interpretations of AB Auto's four calculated financial ratios.
- **Independent Verification:** Recalculated every formula deterministically in Microsoft Excel, audited primary `ABPos` daily Kaspi QR cash registers, and cross-checked physical partnering STO debt ledgers at Koktal 15B.
- **Material Corrections:** Completely rejected GPT-4o's false insolvency warning at `0.44x` and vetoed its recommendation to slash Kaspi Shop retail prices, which would breach the owner's `>=18%` gross margin floor and distort 4-IP statutory turnover caps [3].

### Field 4 · Transfer (Recommendations for AB Auto vs. Interkom-Auto)

Evaluating enterprise financial practices from comparator Interkom-Auto (`Adopt / Adapt / Pilot / Delay / Reject`):

1. **ADOPT:** Automated daily tracking of `Quick Assets / Current Liabilities` inside the `ABPos` management dashboard to monitor real-time liquidity against upcoming EAEU supplier maturities.
2. **ADAPT:** Indirect-method **Cash Flow Statement** accounting adapted for a 4-IP SME to reconcile accrual sales profit with actual liquid cash balances.
3. **PILOT:** Digital accounts-receivable tracking registry in `ABPos` for trusted partnering auto repair stations (STOs) before phasing out paper notebooks.
4. **REJECT:** Interkom-Auto's rigid bank-integrated automated credit scoring, which would sever multi-year relational B2B trust chains with Astana GAZelle mechanics.

### Field 5 · Evidence

[1] G. Yeshenkulova, N. Ibadildin, and M. Tleubayeva, *Business Administration*. Almaty: ZIALY BASPASY, 2026.  
[2] OpenStax, *Introduction to Business*, 2nd ed., 2026, Ch. 16.  
[3] Tax Code of the Republic of Kazakhstan, Law No. 120-VI, Art. 683, 2026.

### Field 6 · Capstone Link

Weekly Record 8 forms the empirical foundation of the **Financial Viability and Risk Governance** section in our final Capstone report and Business Impact Deck. Specifically, the verified 2026 ratio benchmarks (`2.33x`, `0.44x`, `7.00%`, `0.79x`), the human-vs-AI discrepancy audit, and `ABPos` Kaspi QR cash-velocity proofs (`>3.0M KZT/day`) substantiate AB Auto's working-capital resilience during multi-branch digitalization across Koktal 15B and Abylai Khan 62, while providing the quantitative financial evidence (`Ground 1`) defended in Assignment 4.
