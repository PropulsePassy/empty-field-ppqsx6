import React, { useRef, useState } from "react";

const inputStyle = {
  border: "none",
  backgroundColor: "transparent",
  outline: "none",
  width: "100%",
};

const FormulaireMEP = () => {
  const formRef = useRef(null);
  const [somme, setSomme] = useState(5);

  const calculerSomme = () => {
    const inputs = formRef.current.querySelectorAll("input");
    const selects = formRef.current.querySelectorAll("select");
    let total = 0;

    inputs.forEach((input) => {
      const val = input.value.trim();
      const num = parseFloat(val);
      if (!isNaN(num)) {
        total += (num * 20) / 100;
      }
    });

    selects.forEach((select) => {
      if (
        select.name === "validMetier" &&
        (select.value.toLowerCase() === "oui" ||
          select.value.toLowerCase() === "na")
      ) {
        total += 30;
      }
      if (
        select.name === "planRollback" &&
        select.value.toLowerCase() === "oui"
      ) {
        total += 40;
      }
      if (select.name === "planPP" && select.value.toLowerCase() === "oui") {
        total += 40;
      }
      if (
        select.name === "planPP" &&
        select.value.toLowerCase() === "partiel"
      ) {
        total += 20;
      }
      if (
        select.name === "controleMEP" &&
        (select.value.toLowerCase() === "oui" ||
          select.value.toLowerCase() === "na")
      ) {
        total += 20;
      }
      if (
        select.name === "controleMEP" &&
        select.value.toLowerCase() === "partiel"
      ) {
        total += 10;
      }
      if (
        select.name === "RGPD" &&
        (select.value.toLowerCase() === "oui" ||
          select.value.toLowerCase() === "na")
      ) {
        total += 20;
      }
      if (
        select.name === "mailAvantMep" &&
        (select.value.toLowerCase() === "oui" ||
          select.value.toLowerCase() === "na")
      ) {
        total += 5;
      }
      if (
        select.name === "mailPendantMail" &&
        (select.value.toLowerCase() === "oui" ||
          select.value.toLowerCase() === "na")
      ) {
        total += 5;
      }
      if (
        select.name === "formation" &&
        (select.value.toLowerCase() === "oui" ||
          select.value.toLowerCase() === "na")
      ) {
        total += 20;
      }
      if (
        select.name === "droits" &&
        (select.value.toLowerCase() === "oui" ||
          select.value.toLowerCase() === "na")
      ) {
        total += 20;
      }
      if (
        select.name === "supportDepl" &&
        (select.value.toLowerCase() === "oui" ||
          select.value.toLowerCase() === "na")
      ) {
        total += 20;
      }
    });

    setSomme(Math.round(total / 3.7777778 + 5));
  };

  return (
    <div style={{ overflowX: "auto", padding: "1rem" }}>
      <div ref={formRef}>
        <div style={{ marginBottom: "1rem" }}>
          <div
            style={{
              backgroundColor: "#e0e0e0",
              height: "20px",
              width: "100%",
              borderRadius: "5px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                backgroundColor: "#4caf50",
                height: "100%",
                width: `${somme}%`,
                transition: "width 0.3s",
              }}
            />
          </div>
          <div
            style={{ marginTop: "5px", textAlign: "right", fontWeight: "bold" }}
          >
            {Math.round(somme)}%
          </div>
        </div>

        <table
          border="1"
          cellPadding="5"
          style={{ borderCollapse: "collapse", width: "100%" }}
        >
          <colgroup>
            <col style={{ width: "200px" }} /> {/* 👈 1re colonne fixe */}
            <col style={{ width: "180px" }} />
            <col style={{ width: "100px" }} />
            <col />
          </colgroup>
          <thead style={{ backgroundColor: "#d9edf7", textAlign: "center" }}>
            <tr>
              <th rowSpan="2">Rubrique</th>
              <th colSpan="2">Périmètre MEP</th>
              <th rowSpan="2">Commentaires</th>
            </tr>
            <tr>
              <th>Total</th>
              <th>Evol / bugs</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowSpan={"2"}>Evolutions</td>
              <td>
                <input type="text" style={inputStyle} />
              </td>
              <td>
                <input type="text" style={inputStyle} />
              </td>

              <td>
                <input type="text" style={inputStyle} />
              </td>
            </tr>
            <tr>
              <td>% Spécifications</td>
              <td>
                <input
                  type="number"
                  name="specs"
                  min="0"
                  max="100"
                  step="1"
                  defaultValue="0"
                  onChange={calculerSomme}
                  style={inputStyle}
                />
              </td>
              <td>
                <input type="text" style={inputStyle} />
              </td>
            </tr>

            <tr>
              <td rowSpan="6">Tests</td>
              <td style={{ backgroundColor: "#d9edf7", textAlign: "center" }}>
                Intitulé
              </td>
              <td style={{ backgroundColor: "#d9edf7", textAlign: "center" }}>
                Valeur
              </td>
              <td></td>
            </tr>

            <tr>
              <td>% Couverture tests</td>
              <td>
                <input
                  type="number"
                  name="couv"
                  min="0"
                  max="100"
                  step="1"
                  defaultValue="0"
                  onChange={calculerSomme}
                  style={inputStyle}
                />
              </td>
              <td>
                <input type="text" style={inputStyle} />
              </td>
            </tr>
            <tr>
              <td>% Exécution scénarios</td>
              <td>
                <input
                  type="number"
                  name="exec"
                  min="0"
                  max="100"
                  step="1"
                  defaultValue="0"
                  onChange={calculerSomme}
                  style={inputStyle}
                />{" "}
              </td>
              <td>
                <input type="text" style={inputStyle} />
              </td>
            </tr>
            <tr>
              <td>% Preuves exécution</td>
              <td>
                <input
                  type="number"
                  name="preuvesExec"
                  min="0"
                  max="100"
                  step="1"
                  defaultValue="0"
                  onChange={calculerSomme}
                  style={inputStyle}
                />{" "}
              </td>
              <td>
                <input type="text" style={inputStyle} />
              </td>
            </tr>
            <tr>
              <td>% Exécution TNR</td>
              <td>
                <input
                  type="number"
                  name="execTNR"
                  min="0"
                  max="100"
                  step="1"
                  defaultValue="0"
                  onChange={calculerSomme}
                  style={inputStyle}
                />{" "}
              </td>
              <td>
                <input type="text" style={inputStyle} />
              </td>
            </tr>
            <tr>
              <td>% Preuves TNR</td>
              <td>
                <input
                  type="number"
                  name="preuvesTNR"
                  min="0"
                  max="100"
                  step="1"
                  defaultValue="0"
                  onChange={calculerSomme}
                  style={inputStyle}
                />{" "}
              </td>
              <td>
                <input type="text" style={inputStyle} />
              </td>
            </tr>

            <tr>
              <td>Tests et validation métier</td>
              <td>Mail métier</td>
              <td>
                <select
                  style={inputStyle}
                  defaultValue="non"
                  onChange={calculerSomme}
                  name="validMetier"
                >
                  <option value="oui">Oui</option>
                  <option value="non">Non</option>
                  <option value="na">N/A</option>
                </select>{" "}
              </td>
              <td>
                <input type="text" style={inputStyle} />
              </td>
            </tr>

            <tr>
              <td rowSpan="2">Communication</td>
              <td>Avant MEP</td>
              <td>
                <select
                  style={inputStyle}
                  defaultValue="non"
                  onChange={calculerSomme}
                  name="mailAvantMep"
                >
                  <option value="oui">Oui</option>
                  <option value="non">Non</option>
                  <option value="na">N/A</option>
                </select>{" "}
              </td>
              <td>
                <input type="text" style={inputStyle} />
              </td>
            </tr>
            <tr>
              <td>Pendant MEP</td>
              <td>
                <select
                  style={inputStyle}
                  defaultValue="non"
                  onChange={calculerSomme}
                  name="mailPendantMail"
                >
                  <option value="oui">Oui</option>
                  <option value="non">Non</option>
                  <option value="na">N/A</option>
                </select>{" "}
              </td>
              <td>
                <input type="text" style={inputStyle} />
              </td>
            </tr>

            <tr>
              <td>Formation</td>
              <td />
              <td>
                <select
                  style={inputStyle}
                  defaultValue="non"
                  onChange={calculerSomme}
                  name="formation"
                >
                  <option value="oui">Oui</option>
                  <option value="non">Non</option>
                  <option value="na">N/A</option>
                </select>
              </td>
              <td>
                <input type="text" style={inputStyle} />
              </td>
            </tr>

            <tr>
              <td>Gestion des droits</td>
              <td />
              <td>
                <select
                  style={inputStyle}
                  defaultValue="non"
                  onChange={calculerSomme}
                  name="droits"
                >
                  <option value="oui">Oui</option>
                  <option value="non">Non</option>
                  <option value="na">N/A</option>
                </select>
              </td>
              <td>
                <input type="text" style={inputStyle} />
              </td>
            </tr>

            <tr>
              <td>Plan de déploiement</td>
              <td>Support</td>
              <td>
                <select
                  style={inputStyle}
                  defaultValue="non"
                  onChange={calculerSomme}
                  name="supportDepl"
                >
                  <option value="oui">Oui</option>
                  <option value="non">Non</option>
                </select>
              </td>
              <td>
                <input type="text" style={inputStyle} />
              </td>
            </tr>

            <tr>
              <td rowSpan="2">Plan de rollback / Désactivation</td>
              <td>Support</td>
              <td>
                <select
                  style={inputStyle}
                  defaultValue="non"
                  onChange={calculerSomme}
                  name="planRollback"
                >
                  <option value="oui">Oui</option>
                  <option value="non">Non</option>
                </select>
              </td>
              <td>
                <input type="text" style={inputStyle} />
              </td>
            </tr>
            <tr>
              <td>Exécuté PP</td>
              <td>
                <select
                  style={inputStyle}
                  onChange={calculerSomme}
                  defaultValue="non"
                  name="planPP"
                >
                  <option value="oui">Oui</option>
                  <option value="non">Non</option>
                  <option value="partiel">Partiel</option>
                </select>
              </td>
              <td>
                <input type="text" style={inputStyle} />
              </td>
            </tr>

            <tr>
              <td>Contrôles post-MEP</td>
              <td>Support</td>
              <td>
                <select
                  style={inputStyle}
                  defaultValue="non"
                  onChange={calculerSomme}
                  name="controleMEP"
                >
                  <option value="oui">Oui</option>
                  <option value="non">Non</option>
                  <option value="partiel">Partiel</option>
                </select>
              </td>
              <td>
                <input type="text" style={inputStyle} />
              </td>
            </tr>

            <tr>
              <td>RGPD</td>
              <td />
              <td>
                <select
                  style={inputStyle}
                  defaultValue="non"
                  onChange={calculerSomme}
                  name="RGPD"
                >
                  <option value="oui">Oui</option>
                  <option value="non">Non</option>
                  <option value="na">N/A</option>
                </select>{" "}
              </td>
              <td>
                <input type="text" style={inputStyle} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div style={{ marginTop: "1rem" }}>
        {somme !== null && (
          <div style={{ marginTop: "0.5rem" }}>
            <strong>Probabilité de succès de la MEP :</strong> {somme}%
          </div>
        )}
      </div>
    </div>
  );
};

export default FormulaireMEP;
