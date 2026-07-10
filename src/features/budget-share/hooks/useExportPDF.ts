import jsPDF from "jspdf";
import type { Budget } from "@/shared/types";
import services from "@/data/services.json";
import { calculateWebPrice } from "@/shared/utils";

export function useExportPDF(budget: Budget) {
  const handleExportPDF = () => {
    const documentPdf = new jsPDF();
    let y = 20;

    // Title
    documentPdf.setFontSize(20);
    documentPdf.setFont("helvetica", "bold");
    documentPdf.text("Detall del pressupost", 20, y);
    y += 8;

    // Date
    documentPdf.setFontSize(11);
    documentPdf.setFont("helvetica", "normal");
    documentPdf.text(
      `Creat el ${new Date(budget.date).toLocaleDateString("ca-ES")}`,
      20,
      y,
    );
    y += 15;

    // Client
    documentPdf.setFont("helvetica", "bold");
    documentPdf.text(budget.client.name, 20, y);
    y += 7;
    documentPdf.setFont("helvetica", "normal");
    documentPdf.text(budget.client.email, 20, y);
    y += 7;
    documentPdf.text(budget.client.phone, 20, y);
    y += 15;

    // Services list
    documentPdf.setFont("helvetica", "bold");
    documentPdf.text("Serveis contractats:", 20, y);
    y += 7;
    documentPdf.setFont("helvetica", "normal");
    budget.services.forEach((serviceId) => {
      const isWeb = serviceId === "web" && budget.webConfig;
      const name = isWeb
        ? `Web (${budget.webConfig!.pages} pàgines, ${budget.webConfig!.languages} idiomes)`
        : serviceId;
      documentPdf.text(`• ${name}`, 25, y);
      y += 7;
    });
    y += 5;

    // Summary
    documentPdf.setFont("helvetica", "bold");
    documentPdf.text("Resum", 20, y);
    y += 8;
    budget.services.forEach((serviceId) => {
      const serviceData = services.find((s) => s.id === serviceId);
      if (!serviceData) return;
      const isWeb = serviceId === "web" && budget.webConfig;
      const price = isWeb
        ? calculateWebPrice(
            budget.webConfig!.pages,
            budget.webConfig!.languages,
          )
        : serviceData.price;
      const name = isWeb
        ? `Web (${budget.webConfig!.pages} pàgines, ${budget.webConfig!.languages} idiomes)`
        : serviceData.name;
      documentPdf.setFont("helvetica", "bold");
      documentPdf.text(name, 20, y);
      documentPdf.text(`${price} €`, 170, y, { align: "right" });
      y += 6;
      documentPdf.setFont("helvetica", "normal");
      documentPdf.text(serviceData.description, 20, y);
      y += 10;
    });

    // Total
    documentPdf.setFont("helvetica", "bold");
    documentPdf.text("Total pressupost:", 20, y);
    documentPdf.text(`${budget.total} €`, 170, y, { align: "right" });
    y += 15;

    // Terms
    documentPdf.setFont("helvetica", "bold");
    documentPdf.text("Termes i condicions", 20, y);
    y += 8;
    documentPdf.setFont("helvetica", "normal");
    const termes = [
      "El termini d'execució estimat és de 4 a 6 setmanes.",
      "El 50% del pagament s'ha d'abonar per avançat.",
      "Aquest pressupost és vàlid durant 30 dies.",
      "Qualsevol modificació pot afectar el preu final.",
    ];
    termes.forEach((terme) => {
      documentPdf.text(`• ${terme}`, 20, y);
      y += 7;
    });

    documentPdf.save(`pressupost-${budget.id}.pdf`);
  };

  return { handleExportPDF };
}
